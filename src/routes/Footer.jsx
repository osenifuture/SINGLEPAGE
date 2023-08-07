import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div id="footer">
            <div className="footer-container">
            <div className="footer-box">
                <Link className="foot-link"><i className="fa-brands fa-facebook"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-twitter"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-linkedin"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-github"></i></Link>
                <Link  className="foot-link"><i class="fa-brands fa-instagram"></i></Link>
                <Link to='https://wa.me/08062142972' className="foot-link" target="blank"><i class="fa-brands fa-whatsapp"></i></Link>
            </div>
            <p>
            &copy; 2023 WesttyCode
            </p>
            </div>
        </div>
    )
}

export default Footer;