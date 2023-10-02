import more from "../../assets/more.svg";
import link from "../../assets/link.svg";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  return (
    <Link to={`/video`} key={props.key}> <div key={props.key} className="w-fit p-4 video-card flex flex-col gap-y-6" id="work">
      <img src={props.video} alt="" />
      <div className="flex justify-between">
        <span>
          <p className="text-xl">{props.title}</p>
          <p className="text-base text-[#B6B3C6]">{props.date}</p>
        </span>

        <span className="flex gap-x-6 items-center">
          <img src={link} alt="" />
          <img src={more} alt="" />
        </span>
      </div>
    </div></Link>
   
  );
};

export default VideoCard;
