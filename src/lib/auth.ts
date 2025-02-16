import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // .env

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded as { role: number; userId: string }; // token
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return null;
  }
}
