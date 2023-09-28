import Button from "../ui/button";
import arrow from "../assets/arrow-right.svg";
import Imagegrid from "./imagegrid";

const Hero = () => {
  return (
    <div className="flex bg-white mt-1 p-[100px] gap-x-8 justify-center mx-auto items-center">
      <div className="flex-1 flex flex-col gap-y-12">
        <div className="flex flex-col">
          <h1 className="text-[#141414] font-bold text-[64px]">
            Show Them Don’t Just Tell
          </h1>
          <p id="inter" className="text-base leading-7">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>

        <Button className="text-lg w-fit font-medium flex items-center gap-x-3 p-[22px]">
          Install HelpMeOut <img src={arrow} alt="" />
        </Button>
      </div>

      <Imagegrid />
    </div>
  );
};

export default Hero;
