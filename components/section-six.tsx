import mapImage from "@/assets/map.png";
import Image from "next/image";
import Map from "./utils/map";

export default function SectionSix() {
    return (
        <div className="h-fit w-full gold-bg py-10 px-5 flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-5 px-10 text-center">
                <p className="text-pink-500 font-moul text-2xl leading-relaxed xs:text-xl">ប្លង់បង្ហាញទីតាំងកម្មវិធី</p>
                <p className="gold-text font-battambang leading-relaxed text-md text-center">
                    ស្ថិតនៅគេហដ្ឋានខាងស្រី ភូមិកំពង់សំបួរលើ ឃុំព្រែកថ្មី ស្រុកកោះធំ ខេត្តកណ្ដាល
                </p>
            </div>
            <div className="relative w-full h-full p-5">
                <Image src={mapImage} alt="Map" className="w-full h-full object-cover" />
            </div>
            <p className="text-pink-500 font-moul text-2xl leading-relaxed xs:text-xl">ទីតាំងក្នុង Google Map</p>
            <Map/>
        </div>
    )
}