import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../models/user.js';
// Handle ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
// Debug env vars
console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID ? 'Loaded' : 'Missing');
console.log('Google Client Secret:', process.env.GOOGLE_CLIENT_SECRET ? 'Loaded' : 'Missing');
// Configure Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV === 'production'
        ? 'https://openln-engine.onrender.com/api/auth/google/callback'
        : 'http://localhost:5000/api/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        let isNewUser = false;
        if (user)
            return done(null, user);
        user = await User.findOne({ email: profile.emails?.[0].value });
        if (user) {
            user.googleId = profile.id;
            user.isGoogleUser = true;
            await user.save();
            return done(null, user);
        }
        const newUser = await User.create({
            username: profile.displayName.replace(/\s+/g, '') + Math.floor(Math.random() * 1000),
            email: profile.emails?.[0].value,
            password: Math.random().toString(36).slice(-8),
            googleId: profile.id,
            isGoogleUser: true,
            profileData: {
                goal: '',
                timeCommitment: '',
                learningStyle: ''
            }
        });
        // @ts-ignore: custom field for onboarding
        newUser.__isNewUser = true;
        isNewUser = true;
        return done(null, { ...newUser.toObject(), __isNewUser: isNewUser });
    }
    catch (error) {
        console.error('Google auth error:', error);
        return done(error, false);
    }
}));
// Session support
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    }
    catch (error) {
        done(error, null);
    }
});
export default passport;
// ✅ Typed Environment Exports
export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGO_URI = process.env.MONGO_URI;
export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const CLIENT_URL = process.env.CLIENT_URL;
//# sourceMappingURL=passport.js.map