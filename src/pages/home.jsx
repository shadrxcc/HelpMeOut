import Features from "../components/home/features";
import Footer from "../components/footer";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import How from "../components/home/how";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-y-14">
        <Hero />
        <Features />
        <How />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
