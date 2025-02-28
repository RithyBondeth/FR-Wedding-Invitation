import Image from "next/image";
import statueImage from "@/assets/statue-image.svg";
import dividerImage from "@/assets/divider.svg";

export default function SectionTwo() {
    return (
        <div className="h-fit w-full gold-bg flex flex-col gap-5 px-6 pb-5">
            {/* Box One */}
            <div className="flex items-center justify-around gold-text font-moul my-3">
              <div className="flex flex-col gap-3 text-sm">
                <p>លោក ហេង ​កេត</p>
                <p>លោកស្រី លាន ដានី</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <p>លោក សេង ហ៊ី</p>
                <p>លោកស្រី ស្រេង ម៉េងសេង</p>
              </div>
            </div>
            {/* Box Two */}
            <div className="flex flex-col items-center justify-center gap-3 gold-text">
              <p className="text-sm font-moul">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</p>
              <p className="text-xs text-center leading-loose font-battambang">
                សម្ដេច ទ្រង់ ឯកឧត្ដម លោកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដីជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
              </p>
            </div>
            {/* Box Three */}
            <div className="flex items-center justify-around gold-text">
              <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-battambang">កូនប្រុសនាម</p>
                  <p className="text-sm font-moul">កេត​ ម៉េងគាន</p>
              </div>
              <Image src={statueImage} alt="Statue Image"/>
              <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-battambang">កូនស្រីនាម</p>
                  <p className="text-sm font-moul">ហ៊ី ហុងហ្គិច</p>
              </div>
            </div>
            {/* Box Four */}
            <p className="gold-text text-center text-xs font-battambang leading-loose">
              ដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃអាទិត្យ ១០​រោច ខែផល្គុន ឆ្នាំរោង ឆស័ក ពុទ្ធសករាជ ២៥៦៨ ត្រូវនឹងថ្ងៃទី២៣ ខែមីនា ឆ្នាំ២០២៥ វេលាម៉ោង ៥ ល្ងាច ស្ថិតនៅគេហដ្ឋានខាងស្រី ភូមិកំពង់សំបួរលើ ឃុំព្រែកថ្មី ស្រុកកោះធំ ខេត្តកណ្ដាល ដោយមេត្រីភាព ។ សូមអគុណ !
            </p>
            {/* Box Five */}
            <div className="w-full flex flex-col items-center gap-5 gold-text">
              <Image src={dividerImage} alt="Divider Image"/>
              <p className="text-xs uppercase font-times font-normal">together with our families</p>
              <div className="w-full gold-text">
                <div className="w-full flex items-center justify-center gap-5 [&>p]:font-tangerine [&>p]:text-4xl [&>p]:font-bold">
                  <p>Mengkean</p>
                  <p>&</p>
                  <p>Honggeeh</p>
                </div>
              </div>
              <p className="text-xs text-center leading-loose uppercase font-times font-normal">
                invites you to the ceremony and celebration of their marriage
              </p>
              <div className="w-full flex items-center justify-center gap-3 gold-text text-xs uppercase font-times">
                <div className="border-y gold-border px-3 py-1">sunday</div>
                <div className="flex flex-col items-center">
                  <p>March</p>
                  <p className="text-2xl font-bold">23</p>
                  <p>2025</p>
                </div>
                <div className="border-y gold-border px-3 py-1">5:00 PM</div>
              </div>
              <p className="text-xs text-center leading-loose uppercase font-times font-normal">
                at the bride’s house, kampong sambuoler village, prech thmey commune, koh thom district, kandal province, thanks!
              </p>
            </div>
          </div>
    )
}