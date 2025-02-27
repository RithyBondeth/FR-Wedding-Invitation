import SectionOne from "@/components/section-one";
import SectionTwo from "@/components/section-two";
import SectionThree from "@/components/section-three";
import SectionFour from "@/components/section-four";
import SectionSix from "@/components/section-six";
import SectionFive from "@/components/section-five";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-xl">
        <Suspense fallback={<p>Loading...</p>}>
            <SectionOne />
        </Suspense>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>  
        <SectionFive/>
        <SectionSix/>
      </div>
    </div>
  )
}