"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Home() {
    const [mondaySelected, setMondaySelected] = useState(false);
    const [tuesdaySelected, setTuesdaySelected] = useState(false);
    const [wednesdaySelected, setWednesdaySelected] = useState(false);
    const [thursdaySelected, setThursdaySelected] = useState(false);
    useEffect(() => {
        console.log({ mondaySelected, tuesdaySelected, wednesdaySelected, thursdaySelected });
    }, [mondaySelected, tuesdaySelected, wednesdaySelected, thursdaySelected]);
    const onSubmit = () => {
        axios.post("http://localhost:3000/api/essen/send", {
            monday: mondaySelected,
            tuesday: tuesdaySelected,
            wednesday: wednesdaySelected,
            thursday: thursdaySelected
        }).then(r => console.log(r.data));
    }

    return (
        <div className="relative min-h-screen bg-white">
            {/* Hintergrundbild */}
            <Image
                src="/eat-3614411_1280.png"
                alt="Essens Bild"
                width={1920}
                height={1080}
                objectFit="cover"
                priority
                unoptimized
                className="absolute bottom-0 right-0 w-full h-auto z-0 opacity-90"
            />

            {/* Header mit Logo & Titel */}
            <div className="flex items-center w-full px-8 pt-8 mb-6 justify-between relative z-10">
                <Image src="/Logos/Logo T2.png" alt="Logo" width={150} height={150} />
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-black">AAG Mittagsmenü</h1>
                    <p className="text-lg text-gray-700 mt-2">
                        Tippe oder klicke auf das Teller des gewünschten Tages, um dich für das Mittagessen anzumelden.
                    </p>
                </div>
                <div />
            </div>

            {/* Wochentage mit Buttons */}
            <div className="grid grid-cols-4 gap-5 w-full max-w-4xl mx-auto relative z-10">
                {[
                    { tag: "Montag", color: "bg-green-700", icon: "text-green-700", url: "/Teller-Montag.svg", onclick: () => setMondaySelected(!mondaySelected), selected: mondaySelected },
                    { tag: "Dienstag", color: "bg-blue-700", icon: "text-blue-700", url: "/Teller-Dienstag.svg", onclick: () => setTuesdaySelected(!tuesdaySelected), selected: tuesdaySelected },
                    { tag: "Mittwoch", color: "bg-orange-700", icon: "text-orange-700", url: "/Teller-Mittwoch.svg", onclick: () => setWednesdaySelected(!wednesdaySelected), selected: wednesdaySelected },
                    { tag: "Donnerstag", color: "bg-purple-700", icon: "text-purple-700", url: "/Teller-Donnerstag.svg", onclick: () => setThursdaySelected(!thursdaySelected), selected: thursdaySelected },
                ].map(({ tag, color, icon, url, onclick, selected }) => (
                    <div key={tag} className="flex flex-col items-center w-full group cursor-pointer" onClick={onclick}>
                        {/* Tag-Überschrift */}
                        <div className={`w-full p-3 text-white text-center font-bold ${color}`}>{tag}</div>
                        {/* Teller-Symbol */}
                        <div className={`w-full h-40 flex items-center justify-center bg-gray-200 group-hover:bg-gray-400 ${selected ? "bg-gray-400" : ""}`}>
                            <Image src={url} alt="Teller" width={80} height={80} className={icon} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Senden-Button */}
            <div className="flex justify-end px-20 py-10 relative z-10">
                <Button size="lg" variant="secondary" className="h-12 w-40" onClick={onSubmit}>
                    Senden
                </Button>
            </div>
        </div>
    );
};
