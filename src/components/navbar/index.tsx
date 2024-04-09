import { Link} from "react-router-dom";
import logo from "../../assets/header/logo.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <p className={styles.navhead}>CYBERSHIELD</p>
          <div className={styles.navbar_ul}>
            <Link to="/">Home</Link>

            <AnchorLink href='#features' style={{textDecoration: 'none'}}>

              Roadmap
          </AnchorLink>
            {/* <Link
              target="__blank"
              to="#"
            >
              Vision
            </Link> */}
             <AnchorLink href='#tokenomics' style={{textDecoration: 'none'}}>

              Tokenomics
              </AnchorLink>

              <AnchorLink href='https://whitepaper.csl.sh/' style={{textDecoration: 'none'}}>

              Whitepaper
              </AnchorLink>

              <AnchorLink href='#' style={{textDecoration: 'none'}}>

              Chart
              </AnchorLink>
            
          </div>
          <div>
            <RegularButton
              title="Dapp Coming Soon"
              className={styles.navbar_button}
              url="#"
            />
            <img
              src={hamburger}
              className={styles.navbar_hamburger}
              onClick={openNav}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidenav} ${
          isNavOpen ? `${styles.sidenav_show}` : ''
        }`}
      >
        <div className={styles.sidenav_inner}>
          <a
            href="javascript:void(0)"
            className={styles.closebtn}
            onClick={closeNav}
          >
            &times;
          </a>
          <Link to="/">Home</Link>

<AnchorLink href='#features' style={{textDecoration: 'none'}}>

  Roadmap
</AnchorLink>
{/* <Link
  target="__blank"
  to="#"
>
  Vision
</Link> */}
 <AnchorLink href='#tokenomics' style={{textDecoration: 'none'}}>

  Tokenomics
  </AnchorLink>

  <AnchorLink href='https://whitepaper.csl.sh/' style={{textDecoration: 'none'}}>

  Whitepaper
  </AnchorLink>
  <AnchorLink href='#' style={{textDecoration: 'none'}}>

              Chart
              </AnchorLink>
          <RegularButton
            title="Dapp Coming Soon"
            className={styles.sidebar_button}
            url="#"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;