import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = "dein_geheimes_passwort"; // Gleicher Schlüssel wie in der Login-Route

export function middleware_02(req: NextRequest) {
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    try {
        jwt.verify(token, SECRET_KEY);
        return NextResponse.next(); // Zugriff gewährt
    } catch {
        return NextResponse.redirect(new URL("/sign-in", req.url)); // Token ungültig
    }
}

export const config = {
    matcher: ["/dashboard/:path*"], // Schützt alle Seiten unter /dashboard
};
