"use client";
import React, {FormEvent, useState} from "react";
import {Input} from "@/components/ui/input";
import axios from "axios";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignIn = async (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLoading(true);
        const res = await axios.post("/api/essen/auth/login", { email, password }).finally(() => setLoading(false));
        console.log(res.data);

        if (res.status === 200) {
            router.push("/dashboard");
        } else {
            alert("Login fehlgeschlagen!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg shadow-accent-foreground">
                <h2 className="text-center text-2xl font-bold">Sign in to AAG Essen</h2>
                <p className="text-center text-gray-600 mb-4">Melde dich an um dein Essen zu buchen</p>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Enter email"
                        className="w-full p-2 border rounded-lg h-[40px] focus:outline-none focus:ring-black transition truncate focus:shadow-md focus:shadow-accent-foreground"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Enter password"
                        className="w-full p-2 border rounded-lg h-[40px] focus:outline-none focus:ring-black transition truncate focus:shadow-md focus:shadow-accent-foreground"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={(event) => handleSignIn(event)} type="submit" disabled={loading} className="w-full p-2 bg-gray-900 disabled:bg-gray-600 text-white rounded-lg">Continue</Button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
