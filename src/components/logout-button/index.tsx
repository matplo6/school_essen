import { useRouter } from "next/router";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/essen/auth/logout", { method: "POST" });
        await router.push("/sign-in");
    };

    return <button onClick={handleLogout} className="bg-red-500 text-white p-2">Logout</button>;
}
