import Detail from "../components/details/detail";
import Footer from "../components/footer";
import Navbar from "../layout/navbar";

const Singlevideo = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 lg:px-[100px] bg-white py-10 flex flex-col gap-y-8">
        <div id="work" className="text-lg">
          <span>Home</span> / <span>Recent videos</span> /{" "}
          <span className="ont-medium">
            How To Create A Facebook Ad Listing{" "}
          </span>
        </div>

        <Detail />
      </div>
      <Footer/>
    </>
  );
};

export default Singlevideo;
