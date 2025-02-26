import Image from "next/image";
import love1 from "@/assets/loves/1.jpg";
import love2 from "@/assets/loves/2.jpg";
import love3 from "@/assets/loves/3.jpg";
import love4 from "@/assets/loves/4.jpg";
import love5 from "@/assets/loves/5.jpg";
import love6 from "@/assets/loves/6.jpg";

export default function SectionFour() {
    const imageList = [
        { id: 1, src: love1, alt: 'Image 1' },
        { id: 2, src: love2, alt: 'Image 2' },
        { id: 3, src: love3, alt: 'Image 3' },
        { id: 4, src: love4, alt: 'Image 4' },
        { id: 5, src: love5, alt: 'Image 5' },
        { id: 6, src: love6, alt: 'Image 6' },  
    ];

    return (
        <div className="h-fit w-full gold-bg py-10 px-5">
            <div className="flex flex-col items-center gap-5 px-10 text-center">
                <p className="text-pink-500 font-moul text-2xl leading-relaxed xs:text-xl">កម្រងរូបភាពអនុស្សាវរីយ៍</p>
                <p className="gold-text font-battambang text-md leading-relaxed">រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល សម្រាប់យើងទាំងពីរនាក់។</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
                {imageList.map((item) => (
                    <Image 
                        key={item.id} 
                        src={item.src} 
                        alt={item.alt} 
                        className="rounded-xl object-cover"
                    />
                ))}
            </div>
        </div>
    )
}