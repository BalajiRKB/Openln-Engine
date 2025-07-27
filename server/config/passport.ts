import passport from 'passport';
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { HydratedDocument } from 'mongoose';
import User from '../models/user.js';
import { IUser } from '../types/index.js';

// Handle ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Debug env vars
console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID ? 'Loaded' : 'Missing');
console.log('Google Client Secret:', process.env.GOOGLE_CLIENT_SECRET ? 'Loaded' : 'Missing');

// Configure Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL:
        process.env.NODE_ENV === 'production'
          ? 'https://openln-engine.onrender.com/api/auth/google/callback'
          : 'http://localhost:5000/api/auth/google/callback',
      proxy: true
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ): Promise<void> => {
      try {
        let user: HydratedDocument<IUser> | null = await User.findOne({ googleId: profile.id });
        let isNewUser = false;

        if (user) return done(null, user);

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
      } catch (error) {
        console.error('Google auth error:', error);
        return done(error as Error, false);
      }
    }
  )
);

// Session support
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error as Error, null);
  }
});

export default passport;

// ✅ Typed Environment Exports
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const MONGO_URI = process.env.MONGO_URI as string;
export const NODE_ENV = process.env.NODE_ENV as string;
export const PORT = process.env.PORT as string;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
export const CLIENT_URL = process.env.CLIENT_URL as string;
