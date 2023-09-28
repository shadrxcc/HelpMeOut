import logo from "../../assets/logocombined.svg";

const Header = () => {
  return (
    <header className="flex bg-white py-[22px] px-4 sm:px-6 lg:px-0 items-center justify-around">
      <div>
        <img className="w-3/4" src={logo} alt="help-me-out-logo" />
      </div>

      <div
        id="work"
        className="flex text-base font-medium items-center gap-x-10"
      >
        <p>Features</p>
        <p>How It Works</p>
      </div>

      <div>
        <p className="text-lg font-semibold">Get Started</p>
      </div>
    </header>
  );
};

export default Header;
