import styles from "./footer.module.css";
import logo from "../../assets/footer/$CSL.svg";
import dex from"../../assets/footer/DEXTools.png.svg";
import { Link } from "react-router-dom";
import {
  TelegramIcon,
  InstagramIcon,
  LinkednIcon,
  TwitterIcon,
} from "./FooterIcons";
import { RegularButton } from "../buttons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_inner_left}>
            <img src={logo} alt="devfestlogo23" />
            
          </div>
          <div
            className={`${styles.footer_inner_middle} ${styles.footer_res_removal}`}
          >
<div className={styles.ll}  style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 36, display: 'inline-flex'}}>
<div className={styles.footer_tt1} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}><AnchorLink href='https://whitepaper.csl.sh/' style={{textDecoration: 'none', color:'white'}}>

Whitepaper
</AnchorLink>
</div>
<div className={styles.footer_tt2} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}> <AnchorLink href='#features' style={{textDecoration: 'none', color:'white'}}>

Roadmap
</AnchorLink>
</div>

<div className={styles.footer_tt3} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}> 
<AnchorLink  href='#tokenomics' style={{textDecoration: 'none', color:'white'}}>

Tokenomics
</AnchorLink>



</div>
<div className={styles.footer_tt3} style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}> <AnchorLink href='#features' style={{textDecoration: 'none', color:'white'}}>

Chart
</AnchorLink>
</div>
</div>





 
          </div>
          <div className={styles.footer_inner_right}>
            
            <Link
              className={styles.footer_res_removal}
              target="__blank"
              to="#"
            >
            <img src={dex} alt="devfestlogo23" />
            </Link>
           

            <div className={styles.footer_inner_right_flex}>
              <Link target="__blank" to="https://twitter.com/CyberShieldERC">
                <TwitterIcon />
              </Link>
              <Link target="__blank" to="https://t.me/CyberShieldERC">
                <TelegramIcon />
              </Link>

           
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
      (c) 2024 All Rights Reserved. 
      </div>
    </>
  );
}

export default Footer;