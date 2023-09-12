export interface JwtPayload {
    username: string;
    sub: string;  // This could be the user's ID or another unique identifier.
    iat?: number; // Optional: "issued at" timestamp.
    exp?: number; // Optional: expiration timestamp.
  }