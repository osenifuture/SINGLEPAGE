import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="home">
      <div className="home-container">
       <div className="box" data-aos="zoom-in-down">
        <p>call us</p>
        <h3>+234 806 214 2972</h3>
        <h1>Because Money</h1>
        <span>Doesn't come with instructions</span>
        <button>FREE CONSULTATION</button>
       </div>
      </div>
    </div>
  );
};

export default Home;
