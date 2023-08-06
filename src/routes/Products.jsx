import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Responsive from "../slider/slider"




const Products = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    },[])
    return(
        <div id="products">
          <Responsive/>
        </div>
    )
}

export default Products;