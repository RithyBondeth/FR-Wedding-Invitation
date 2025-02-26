import coupleBackgroundImage2 from "@/assets/couple-background2.jpg";

export default function SectionFive() {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center gap-10 px-10">
            <div 
                className="absolute inset-0 bg-center bg-cover bg-no-repeat "
                style={{ backgroundImage: `url(${coupleBackgroundImage2.src})`,backgroundPosition: '55% 50%', filter: 'blur(2px)'}}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="p-5 text-[#FFDC00] font-medium rounded-lg border border-[#FFDC00] flex flex-col items-center gap-3 z-10">
                <p className="font-moul text-lg">លិខិតសូមថ្លែងអំណគុណ</p>
                <p className="font-battambang leading-loose">
                    ខ្ញុំបាទ នាងខ្ញុំ ជាមាតាបិតា កូនប្រុស-កូនស្រី សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះវត្តមាន ដ៏ឧត្តុង្គឧត្តមរបស់សម្តេច ទ្រង់ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា ឧកញ៉ា លោកស្រី អ្នកនាង កញ្ញា 
                    អញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស ក្នុងពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស-ស្រី របស់យើងខ្ញុំ។ សូមមេត្តាទទួលនូវ សេចក្តីគោរព ដ៏ខ្ពង់ខ្ពស់ពីយើងខ្ញុំ។
                </p>
            </div>
            <div className="p-5 text-[#FFDC00] font-medium rounded-lg border border-[#FFDC00] flex flex-col items-center gap-3 z-10">
                <p className="font-moul text-lg">លិខិតសូមអភ័យទោស</p>
                <p className="font-battambang leading-loose">
                    ខ្ញុំបាទ នាងខ្ញុំ ជាមាតាបិតាកូនប្រុស-ស្រី សូមខន្តី អភ័យទោសពីសំណាក់ សម្តេច ទ្រង់ ឯកឧត្តម លោកជំទាវ អ្នកឧញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា និងភ្ញៀវកិត្តិយសទាំងអស់ 
                    ដោយពុំបានជូនលិខិតអញ្ជើញ ដោយផ្ទាល់ដៃ ឬចំពោះកំហុសអក្ខរាវិរុទ្ធ​ក្នុងការសរសេរឈ្មោះពុំបានត្រឹមត្រូវ។ សូមមេត្តា យោគយល់ពីក្រុមគ្រួសារយើងខ្ញុំ និងសូមគោរពអរគុណ ទុកជាមុន។
                </p>
            </div>
        </div>
    )
}