import Form from "./Form";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  return (
    <div id="services">
      <div className="box" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <span>More than 100 Financial Planners,</span>
        <h1>One Philosophy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          exercitationem unde molestiae, eveniet aperiam, quisquam deserunt
          sequi incidunt quo beatae voluptatum. Corrupti, reprehenderit, ipsum
          ex molestias dignissimos recusandae similique ad natus impedit iure
          eos numquam distinctio! Aut unde fuga nulla.
        </p>
        <button>GET YOUR FREE FINANCIAL ANALYSIS</button>
      </div>
      <div className="form-container" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <Form />
      </div>
    </div>
  );
};

export default Services;
