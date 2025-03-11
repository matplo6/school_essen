import { NextRequest, NextResponse } from "next";
//import { serialize } from "cookie";

export async function POST(req: NextRequest, res: NextResponse) {
    /*res.setHeader("Set-Cookie", serialize("auth_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        expires: new Date(0),
    }));*/

    return res.status(200).json({ message: "Logout erfolgreich" });
}
