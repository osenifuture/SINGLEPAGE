import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleCloseMenu = () => {
    setIsMobile(false);
  };

  return (
    <div className="navbar-container">
      <Link to="home" smooth={true} offset={-70} duration={500} spy={true} className="logo">
      <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			WesttyCode
		</text>
	</svg>
</div>
      </Link>

      <div className={isMobile ? "mobile-link" : "navlinks"} onClick={handleCloseMenu}>
        <li>
          <Link to="home" smooth={true} offset={-70} duration={500} spy={true} onClick={handleCloseMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-70} duration={500} spy={true} onClick={handleCloseMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="products" smooth={true} offset={-70} duration={500} spy={true} onClick={handleCloseMenu}>
            Products
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-70} duration={500} spy={true} onClick={handleCloseMenu}>
            Services
          </Link>
        </li>
      </div>
      <div className="mobile-menu" onClick={handleMenu}>
        {isMobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
    </div>
  );
};

export default Navbar;
