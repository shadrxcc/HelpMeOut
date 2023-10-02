import { Link } from "react-router-dom";
import logo from "../assets/logocombined-white.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col p-8 sm:p-8 gap-y-8 sm:flex-row items-start lg:p-[100px]"
    >
      <Link to={`/`}>
        {" "}
        <img className="w-[10rem]" src={logo} alt="logo" />
      </Link>

      <div className="text-white gap-y-8 w-full justify-evenly flex flex-col sm:flex-row sm:items-center">
        <div className="flex flex-col gap-y-7">
          <h6>Menu</h6>
          <ul className="text-base flex flex-col gap-y-6" id="work">
            <Link to={`/home`}>
              <li className=" cursor-pointer">Home</li>
            </Link>
            <li className=" cursor-pointer">Converter</li>
            <li className=" cursor-pointer">How it Works</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7">
          <h6>About us</h6>
          <ul className="text-base flex flex-col gap-y-6" id="work">
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Contact Us</li>
            <li className=" cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7">
          <h6>Screen Record</h6>
          <ul className="text-base flex flex-col gap-y-6" id="work">
            <li className=" cursor-pointer">Browser Window</li>
            <li className=" cursor-pointer">Desktop</li>
            <li className=" cursor-pointer">Application</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
