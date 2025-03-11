import NextAuth, { AuthOptions } from "next-auth";
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
                if (credentials === undefined) {
                    return null;
                }
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
            if(session.user === undefined) {
                return session;
            }
            session.user.name = token.sub; // Benutzer-ID ins Session-Objekt speichern
            return session;
        },
    },
} as AuthOptions;

export default NextAuth(authOptions);
