import jwt from "jsonwebtoken";
const secret=process.env.JWT_SECRET;
export function signToken(payload:{userId:string;role:string}) {
 if(!secret) throw new Error("JWT_SECRET missing");
 return jwt.sign(payload,secret,{expiresIn:"7d"});
}
export function verifyToken(token:string) {
 if(!secret) throw new Error("JWT_SECRET missing");
 return jwt.verify(token,secret) as {userId:string;role:string};
}
export function requireStaffRole(role:string,allowed:string[]) {
 if(!allowed.includes(role)) throw new Error("FORBIDDEN");
}