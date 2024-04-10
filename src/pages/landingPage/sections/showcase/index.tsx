
import { RegularButton } from '../../../../components/buttons';
import styles from "./showcase.module.css";
import {ArrowDownSquareFill}  from "react-bootstrap-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const handleClick = () => {
  // Find the next div to scroll to
  const nextDiv = document.querySelector('.next-div');

  // Scroll to the next div
  if (nextDiv) {
    nextDiv.scrollIntoView({ behavior: 'smooth' });
  }
};

function Showcase() {
  return (
    <div className={styles.showcase_container}>
    <div className={styles.showcase_inner}>
      <p className={styles.sss}><span className={styles.showcase_span}>Shield Your Data,</span></p>
      <p ><span className={styles.showcase_span2}>Secure Your Future </span></p>
      <div className={styles.showcase_icon}>
     
      <p className={styles.ssg}><span className={styles.showcase_span4}>Unlock a World of Privacy and Security</span></p>
      <p><span className={styles.showcase_span4}>Experience Freedom Online</span></p>
      <p className={styles.ssh}><span className={styles.showcase_span4}>Maximize Your Investments with Real-Time Insights</span></p>


      </div>

     <div className={styles.button}>  
     <RegularButton
              title="Dapp Coming Soon"
              className={styles.showcase_button}
              url="#"
            />

     </div>
     <div style={{ marginTop: 30 }}>
      <AnchorLink href="#potential" style={{ textDecoration: 'none' }}>
        <button className={styles.appear_animation} style={{background: 'none', border:'none'}}>
          <ArrowDownSquareFill style={{ color: 'white', fontSize: 40 }} />
        </button>
      </AnchorLink>
    </div>
     
      </div>
    </div>
  );
}

export default Showcase;
