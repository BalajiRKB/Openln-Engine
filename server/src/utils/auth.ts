import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);

export const signToken = async (payload: any): Promise<string> => {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(SECRET_KEY);
};

export const verifyToken = async (token: string): Promise<any> => {
    try {
        const { payload } = await jwtVerify(token, SECRET_KEY);
        return payload;
    } catch (error) {
        return null; // Invalid token
    }
};
