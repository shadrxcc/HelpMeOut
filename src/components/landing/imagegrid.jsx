import frame1 from "../../assets/frame-1.webp";
import frame2 from "../../assets/frame-2.webp";
import frame3 from "../../assets/frame-3.webp";

const Imagegrid = () => {
  return (
    <div className="flex-1">
      <div className="flex gap-x-1 sm:gap-x-[14px] items-center">
        <div className="flex flex-col gap-y-1 sm:gap-y-[14px]">
          <img src={frame1} alt="" />
          <img src={frame2} alt="" />
        </div>
        <div>
          <img src={frame3} alt="" />
        </div>
      </div>

      {/* <img className="absolute bottom-0" src={grid_blue} alt="" />
      <img className="absolute top-0 right-0" src={grid_grey} alt="" /> */}
    </div>
  );
};

export default Imagegrid;
