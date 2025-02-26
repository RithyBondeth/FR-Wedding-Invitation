"use client";

import topImage from "@/assets/top-image.svg";
import logoImage from "@/assets/logo-image.svg";
import nameFrameImage from "@/assets/name-frame.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function SectionOne() {

    const searchParams = useSearchParams();
    const name = searchParams.get('name') as string;

    return (
        <div className="relative w-full">
              <Image src={topImage} alt="Top background" className="w-full h-auto" priority/>
              <div className="absolute top-44 xs:top-36 w-full flex flex-col justify-center items-center gap-5">
                <Image src={logoImage} alt="Logo"/>
                <div className="gold-text text-xl font-moul flex flex-col items-center gap-5">
                    <p>សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
                    <p>សូមគោរពអញ្ចើញ</p>
                </div>
                <div className="bg-center bg-cover bg-no-repeat h-fit w-[80%] px-3 py-8" style={{backgroundImage: `url(${nameFrameImage.src})`}}>
                    <p className="gold-text text-sm font-moul z-10 text-center">{name}</p>
                </div>
              </div>
        </div>
    )
}