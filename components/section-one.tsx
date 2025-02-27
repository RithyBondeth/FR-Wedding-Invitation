"use client";

import topImage from "@/assets/top-image.png";
import logoImage from "@/assets/logo-image.svg";
import nameFrameImage from "@/assets/name-frame.svg";
import butterFlyImage from "@/assets/butterfly.gif";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SectionOne() {
    const searchParams = useSearchParams();
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        setName(searchParams.get("name"));
    }, [searchParams]);  

    return (
        <div className="relative w-full">
            {/* Top Background */}
            <Image src={topImage} alt="Top background" className="w-full h-auto" priority />

            {/* Butterfly Animation */}
            <Image
                src={butterFlyImage}
                alt="Butterfly"
                className="absolute top-10 left-1/2 -translate-x-1/2 size-40"
                unoptimized
                loading="lazy"
            />

            {/* Logo & Title */}
            <div className="absolute top-36 xs:top-32 w-full flex flex-col justify-center items-center gap-4">
                <Image src={logoImage} alt="Logo" className="w-24 xs:w-28" />
                <div className="gold-text text-lg xs:text-xl font-moul flex flex-col items-center gap-3">
                    <p>សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
                    <p>សូមគោរពអញ្ចើញ</p>
                </div>

                {/* Name Frame - Now Smaller & Fits Well on Mobile */}
                {name && (
                    <div
                        className={` relative flex justify-center items-center ${name.length > 15 ? "w-[70%] max-w-[280px]" : "w-[60%] max-w-[180px]"} aspect-[3.8/1] bg-center bg-cover bg-no-repeat px-2`}
                        style={{ backgroundImage: `url(${nameFrameImage.src})` }}
                    >
                        {/* Khmer Name Text - Perfect Fit for Mobile */}
                        <p className="text-center gold-text font-moul tracking-wide px-3"
                            style={{
                                fontSize: "clamp(9px, 3.2vw, 13px)", 
                                maxWidth: "80%",
                                lineHeight: "1.6",
                                letterSpacing: "0.2px",
                            }}
                        >
                            {name}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}