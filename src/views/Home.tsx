import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import About from "../components/About";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* <h1 className="font-hiragino text-3xl">Hiragino Heading</h1>
      <p className="font-khand text-base">Khand body text</p>
      <span className="font-sfpro font-bold">SF Pro Bold text</span> */}

      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
      <About />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default Home;
