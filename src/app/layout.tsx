import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "latin-ext", "cyrillic-ext", "cyrillic", "greek", "greek-ext", "math", "symbols", "vietnamese"],
    weight: ["100", "200", "900", "800", "700", "600", "500", "400", "300"]
});

export const metadata: Metadata = {
    title: "AAG Essen",
    description: "Essens Seite des AAG",
};

export default function RootLayout({
     children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${roboto.className} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
