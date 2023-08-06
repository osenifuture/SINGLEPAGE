import { BrowserRouter as  Router} from "react-router-dom";
import { Element } from "react-scroll";
import Navbar from "./navbar/Navbar";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Services from "./routes/Services";
import About from "./routes/About";
import Footer from "./routes/Footer";
import ScrollToTopButton from "./slider/ScrollToTopButton";


function App() {
  return (
    <Router>
      <Navbar/>
      <Element name="home"> <Home/> </Element>
      <Element name="about"> <About/> </Element>
      <Element name="products"> <Products/> </Element>
      <Element name="services"> <Services/> </Element>
      <ScrollToTopButton/>
      <Footer/>
    </Router>
  );
}

export default App;
