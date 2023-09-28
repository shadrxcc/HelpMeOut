import logo from "../../src/assets/logocombined.svg";
import arrow from "../../src/assets/arrow-down.svg";
import pfp from "../../src/assets/profile-circle.svg";

const Navbar = () => {
  return (
    <header className="flex bg-white py-[22px] px-4 sm:px-6 lg:px-0 items-center justify-around">
      <div>
        <img className="w-3/4" src={logo} alt="help-me-out-logo" />
      </div>

      {/* <div
        id="work"
        className="flex text-base font-medium items-center gap-x-10"
      >
        <p>Features</p>
        <p>How It Works</p>
      </div> */}

      <div className="flex gap-x-2 items-center">
        <img src={pfp} alt="" />
        <p id="work" className="text-base">
          John Mark
        </p>
        <img src={arrow} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
