
import testmonialsData from "../../data/hallOfFameData.json";
import { TestimonialsCard } from "./Testimonials";

const TestimonialsPage = () => {
  return (
    <section className=" bg-main ">
    <div
      className="sm:h-[25vh] bg-cover bg-center bg-backfeoung-image text-center relative"
    >
      <div className="sm:h-[25vh] flex flex-col pt-4">
      <h3 className="text-[46px] md:text-[66px] playball-regular  tracking-wider flex justify-center gap-2 items-center text-white">
          CalRaid's Hall Of Fame
          <img src="/sparkles.svg" alt="" className="h-0 md:h-12" />
        </h3>
      </div>
    </div>
    <div className="w-[95%] lg:w-[85%] mx-auto py-12 columns-1 md:columns-2 lg:columns-3 text-center">
    {testmonialsData.clients.map((i) => (
              <div key={i.id} className="px-0 md:px-4  break-inside-avoid mb-4 ">
                <TestimonialsCard
                  feedback={i.feedback}
                  name={i.name}
                  profession={i.profession}
                  location={i.location}
                  id={i.id}
                  fullPara={true}
                />
              </div>
            ))}
    </div>
  </section>
  )
}

export default TestimonialsPage