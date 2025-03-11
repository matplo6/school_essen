import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (credentials?.username === "mploes6" && credentials.password === "Mp06112012!") {
                    return { id: "1", name: "Mploes6" }; // Erfolgreich eingeloggt
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt", // Oder "database" für DB-Sessions
    },
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub; // Benutzer-ID ins Session-Objekt speichern
            return session;
        },
    },
};

export default NextAuth(authOptions);
