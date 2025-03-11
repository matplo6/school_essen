import jwt from "jsonwebtoken";

const SECRET_KEY = "dein_geheimes_passwort"; // Sichere dies in einer .env-Datei

export async function POST(req: Request) {
    const { email, password } = await req.json();
    if (email === "mploes6" && password === "Mp06112012!") {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
        const user = {
            email: email,
            password: password,
            website: "https://www.mploes6.com",
        }
        return Response.json({ message: "Login erfolgreich", user });
    }

    return new Response("User not found in the database!", { status: 404 });
}
