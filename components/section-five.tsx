import coupleBackgroundImage2 from "@/assets/couple-background2.jpg";

export default function SectionFive() {
    return (
        <div className="relative h-fit flex flex-col items-center justify-center gap-10 p-10">
            <div 
                className="absolute inset-0 bg-center bg-cover bg-no-repeat "
                style={{ backgroundImage: `url(${coupleBackgroundImage2.src})`,backgroundPosition: '55% 50%', filter: 'blur(2px)'}}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="p-5 text-[#FFDC00] font-medium rounded-lg border border-[#FFDC00] flex flex-col items-center gap-3 z-10">
                <p className="font-moul text-lg">លិខិតសូមថ្លែងអំណគុណ</p>
                <div className="font-battambang !leading-loose xs:text-sm">
                    <p>យេីងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជា ភ្ញៀវកិត្តិយស ដ៏ឧត្តុង្គឧត្តមក្នុងកម្មវិធី របស់យេីងខ្ញុំ។</p>
                    <p>សូមជូនពរ ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងភ្ញៀវកិត្តិយសទាំងអស់មានសុខភាពល្អនិងទទួលជោគជ័យគ្រប់ភារៈកិច្ច។
                    សូមអរគុណ!</p>
                </div>
            </div>
            <div className="p-5 text-[#FFDC00] font-medium rounded-lg border border-[#FFDC00] flex flex-col items-center gap-3 z-10">
                <p className="font-moul text-lg">លិខិតសូមអភ័យទោស</p>
                <div className="font-battambang !leading-loose xs:text-sm">
                    <p>យើងខ្ញុំសូមអភ័យទោសដោយពុំបានជួបអញ្ជើញដោយផ្ទាល់ និង ការសរសេរឈ្មោះរបស់ភ្ញៀវកិត្តិយស មិនបានត្រឹមត្រូវ ឬ ពុំបានសរសេរឈ្មោះ។</p>
                    <p>វត្តមាន របស់ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តទាំងអស់ គឺជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម សម្រាប់ក្រុម គ្រួសាររបស់យេីងខ្ញុំ។</p>
                </div>
            </div>
        </div>
    )
}