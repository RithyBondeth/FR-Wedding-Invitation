import coupleBackgroundImage1 from "@/assets/couple-background1.jpg";

export default function SectionThree() {
    const scheduleList1 = [
        { label: 'ម៉ោង ០២:០០ រសៀល', value: 'ពិធីសែនក្រុងពាលី' },
        { label: 'ម៉ោង ០៣:០០ រសៀល', value: 'ពិធីសូត្រមន្តចំរើនព្រះបរិត្ត' },
        { label: 'ម៉ោង ០៤:០០ រសៀល', value: 'ពិធីជាវខាន់ស្លា' },
        { label: 'ម៉ោង ០៥:០០ រសៀល', value: 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច' },
      ]
    
      const scheduleList2 = [
        { label: 'ម៉ោង ០៦:៣០ ព្រឹក', value: 'ជួបជុំភ្ញៀវកិត្តិយសរៀបចំហែជំនូន' },
        { label: 'ម៉ោង ០៧:០០ ព្រឹក', value: 'ពិធីហែជំនូន(កំណត់)' },
        { label: 'ម៉ោង ០៧:៣០ ព្រឹក', value: 'ពិធីចៅមហានិយាយជើងការ' },
        { label: 'ម៉ោង ០៨:៣០ ព្រឹក', value: 'ពិធីបំពាក់ចិញ្ចៀន' },
        { label: 'ម៉ោង ០៩:១៥ ព្រឹក', value: 'ពិធីកាត់សក់បង្កក់សិរី' },
        { label: 'ម៉ោង ១១:០០ ថ្ងៃត្រង់', value: 'ពិធីបង្វិលពពិល សំពះផ្ទឹម សែនចងដៃ ព្រះថោងនាងនាគ' },
        { label: 'ម៉ោង ១២:០០ ថ្ងៃត្រង់', value: 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់' },
        { label: 'ម៉ោង ០៥:០០ ល្ងាច', value: 'ទទួលបដិសណ្ឋារកិច្ច និងអញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ' },
      ];

    return (
        <div className="relative h-screen w-full xs:h-fit xs:py-5">
          {/* Blurred background layer */}
          <div 
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${coupleBackgroundImage1.src})`,backgroundPosition: '55% 50%', filter: 'blur(2px)'}}
          />
          {/* Content layer */}
          <div className="relative h-full flex justify-center items-center text-[#FFDC00] font-moul px-5">
            <div className="flex flex-col items-center gap-10">
              <p className="text-xl">កម្មវិធីសិរីសួស្ដីអាពាហ៍ពិពាហ៍</p>
              <div className="h-fit w-fit p-5 rounded-2xl border border-[#FFDC00] bg-black/30 backdrop-blur-sm">
                  {/* Schedule 1 */}
                <div className="flex flex-col items-center justify-center gap-5 pb-5 border-b border-[#FFDC00]">
                  <div className="flex flex-col items-center gap-3 text-sm">
                    <p>កម្មវិធីថ្ងៃទី១</p>
                    <p>ថ្ងៃសៅរ៍ ទី២២ ខែមីនា ឆ្នាំ២០២៥</p>
                  </div>
                  <ul className="w-full flex flex-col items-start gap-2">
                    {scheduleList1.map((item, index) => (
                      <li key={index} className="text-md font-battambang flex items-start">
                        <p className="text-nowrap min-w-[125px]">{item.label}</p>
                        <p className="mx-1">:</p>
                        <p>{item.value}</p>
                      </li>
                    ))}
                   </ul>
                </div>
                {/* Schedule 2 */}
                <div className="w-full flex flex-col items-center justify-center gap-5 pt-5">
                  <div className="flex flex-col items-center gap-3 text-sm">
                    <p>កម្មវិធីថ្ងៃទី២</p>
                    <p>ថ្ងៃសៅរ៍ ទី២៣ ខែមីនា ឆ្នាំ២០២៥</p>
                  </div>
                  <ul className="flex flex-col items-start gap-2">
                    {scheduleList2.map((item, index) => (
                      <li key={index} className="text-md font-battambang flex items-start">
                       <p className="text-nowrap min-w-[125px]">{item.label}</p>
                       <p className="mx-1">:</p>
                        <p>{item.value}</p>
                      </li>
                    ))}
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}