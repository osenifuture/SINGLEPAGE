import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// import Responsive from "../slider/slider";


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div id="about">
      <div className="about-container">
        <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
          src="https://i.ibb.co/pvcpQsF/pexels-cottonbro-studio-3206114-removebg-preview.png"
          alt=""
        />
        <div className="box" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            esse nam incidunt ut dolore inventore sit laboriosam, veritatis
            debitis, dolor minima exercitationem laborum? Vitae nemo mollitia,
            nesciunt quas aliquid nam aspernatur similique placeat fugiat rem
            quidem iusto aperiam, accusamus animi minima consectetur ducimus?
            Fugit molestiae consectetur esse possimus similique inventore.
          </p>

          <h2>I am John Doe, s senior advisor for an independently owned finacial planning company called intense.</h2>

          <button>EXPLORE MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
