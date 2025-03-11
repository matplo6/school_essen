import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Set-Cookie", serialize("auth_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        expires: new Date(0),
    }));

    return res.status(200).json({ message: "Logout erfolgreich" });
}
