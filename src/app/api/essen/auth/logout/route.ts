//import { serialize } from "cookie";

export async function POST(req: Request) {
    /*res.setHeader("Set-Cookie", serialize("auth_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        expires: new Date(0),
    }));*/

    return Response.json({ message: "Logout erfolgreich", request: req });
}
