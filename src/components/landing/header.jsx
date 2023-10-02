import { Link } from "react-router-dom";
import logo from "../../assets/logocombined.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [menutoggle, setMenuToggle] = useState(false);

  return (
    <header className="flex bg-white py-[22px] px-4 sm:px-8 lg:px-[100px] items-center justify-between">
      <div>
        <Link to={`/`}>
          <img className="w-3/4" src={logo} alt="help-me-out-logo" />
        </Link>
      </div>

      <div
        id="work"
        className="hidden sm:flex text-base font-medium items-center gap-x-10"
      >
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">How It Works</p>
      </div>

      <div className="hidden sm:block">
        <Link to={`/login`}>
          <p className="text-lg font-semibold">Get Started</p>
        </Link>
      </div>

      <RiMenu3Line className="sm:hidden" onClick={() => setMenuToggle(true)} size={30} />

      {menutoggle && (
        <div className={`text-center w-full z-10 left-0 top-0 flex flex-col h-[50vh] p-4 gap-y-10 bg-white absolute sm:hidden`}>
          <span className="cursor-pointer">
            <RiCloseLine
              className=" float-right"
              color="black"
              size={30}
              onClick={() => setMenuToggle(false)}
            />
          </span>
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">How It Works</p>
          <p className="text-lg font-semibold">Get Started</p>
        </div>
      )}
    </header>
  );
};

export default Header;
