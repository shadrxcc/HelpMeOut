import Footer from "../components/footer";
import PrevWeek from "../components/home/prevweek";
import Recents from "../components/home/recents";
import Welcome from "../components/home/welcome";
import Navbar from "../layout/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Recents />
      <PrevWeek />
      <Footer />
    </>
  );
};

export default Home;
