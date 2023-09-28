import { features } from "./data";
import videorepo from "../assets/videorepo.svg";

const Features = () => {
  return (
    <div className="bg-white py-20 flex flex-col gap-y-16 px-4 sm:px-8 lg:px-[100px]">
      <span className="flex justify-center items-center flex-col gap-y-2">
        <h3 className="text-[#141414] place-items-stretch text-[40px] font-bold">
          Features
        </h3>
        <p className="text-[#616163] text-base" id="work">
          Key Highlights of Our Extension
        </p>
      </span>

      <div className="flex flex-col-reverse sm:flex-row gap-y-8 gap-x-14 items-center">
        <div className="flex-1 flex flex-col gap-y-12 sm:gap-y-5">
          {features.map((feature) => {
            return (
              <div className="flex gap-x-6 items-baseline" key={feature.id}>
                <img
                  className="w-[32px]"
                  src={feature.icon}
                  alt={feature.text}
                />
                <div className="flex flex-col gap-y-2">
                  <p className="text-[#1B233D] font-semibold text-[28px]">
                    {feature.text}
                  </p>
                  <p className="text-[#616163] text-[20px]" id="work">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex-1">
          <img className="h-[454px]" src={videorepo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
