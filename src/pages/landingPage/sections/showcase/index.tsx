import { useState, useEffect } from "react";
import { RegularButton } from '../../../../components/buttons';
import styles from "./showcase.module.css";
import { ArrowDownSquareFill } from "react-bootstrap-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Showcase() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const showcaseContainer = document.querySelector(`.${styles.showcase_container}`);
      const elementTop = showcaseContainer ? showcaseContainer.getBoundingClientRect().top : 0;
            const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        setRevealed(true);
      } else {
        setRevealed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Preload the image */}
      <link rel="preload" href="../../../../assets/pictures/Frame251.png" as="image" />
      <div className={`${styles.showcase_container} ${revealed ? styles.active : ""}`}>
        <div className={styles.showcase_inner}>
          <p className={styles.sss} data-aos="fade-left" data-aos-duration="5000" data-aos-anchor-placement="center-bottom"><span className={styles.showcase_span}>Shield Your Data,</span></p>
          <p data-aos="fade-right" data-aos-duration="5000" data-aos-anchor-placement="center-bottom"><span className={styles.showcase_span2}>Secure Your Future </span></p>
          <div className={styles.showcase_icon}>
            <p className={styles.ssg}><span className={styles.showcase_span4}>Unlock a World of Privacy and Security</span></p>
            <p><span className={styles.showcase_span4}>Experience Freedom Online</span></p>
            <p className={styles.ssh}><span className={styles.showcase_span4}>Maximize Your Investments with Real-Time Insights</span></p>
          </div>
          <div className={styles.button}>
            <RegularButton data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
              title="Dapp Coming Soon"
              className={styles.showcase_button}
              url="#"
            />
          </div>
          <div className={styles.ar} style={{ marginTop: 30 }}>
            <AnchorLink href="#potential" style={{ textDecoration: 'none' }}>
              <button className={styles.appear_animation} style={{ background: 'none', border: 'none' }}>
                <ArrowDownSquareFill style={{ color: 'white', fontSize: 40 }} />
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
