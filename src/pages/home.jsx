import Features from "../components/features";
import Header from "../components/header";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-y-14">
        <Hero />
        <Features />
      </div>
    </div>
  );
};

export default Home;
