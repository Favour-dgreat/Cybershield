import { useState, useEffect } from "react";
import styles from './thisyear.module.css';
import Image from '../../../../components/images';
import thisfeatureImg from '../../../../assets/pictures/Group.png';
import thisfeature3Img from '../../../../assets/pictures/ll.png';
import thisfeature4Img from '../../../../assets/pictures/ai.png.png';

const ThisYear = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const showcaseContainer = document.querySelector(`.${styles.thisyear_container}`);
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
    <div id='potential' className={`${styles.thisyear_container} ${revealed ? styles.active : ""}`}>
       <div className={styles.thisyear_inner}> 
         <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={styles.potential}>Unlock The Potential Of CyberShield</h3>

         <div className={styles.thisyear_text}>
           <div className={styles.thisyear_shields} > 
             <Image
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-anchor-placement="center-bottom"
               src={thisfeatureImg}
               className={styles.story_item_image3}
             />
           </div>    
           <div className={styles.thisyear_shield}> 
             <h2 data-aos="fade-left" data-aos-duration="3000" className={styles.thisyear_servers}>VPS Servers</h2>
             <p className={styles.scale} data-aos="fade-right" data-aos-duration="3000">
               Dedicated, scalable VPS clusters with zero-compromise performance, with up to 10gbs (network speed) and up to 128gb ram. We offer the best dedicated servers for any personal or commercial use.        
             </p>
           </div>  
         </div>

         <div className={styles.thisyear_text1}>
           <div className={styles.thisyear_shields1}> 
             <Image
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-anchor-placement="center-bottom"
               src={thisfeature3Img}
               className={styles.story_item_image4}
             />
           </div>    
           <div className={styles.thisyear_shield1}> 
             <h2 data-aos="fade-left" data-aos-duration="3000" className={styles.thisyear_servers1}>Affordable and Transparent</h2>
             <p data-aos="fade-right" data-aos-duration="3000" className={styles.scale1}>
               Lower your expenses through utilizing our trustworthy VPS rental services instead of purchasing your own equipment for your highly demanding activities.
             </p>      
           </div>  
         </div>

         <div className={styles.thisyear_text2}>
           <div className={styles.thisyear_shields}> 
             <Image
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-anchor-placement="center-bottom"
               src={thisfeature4Img}
               className={styles.story_item_image5}
             />
           </div>    
           <div className={styles.thisyear_shield3}> 
             <h2 data-aos="fade-left" data-aos-duration="3000" className={styles.thisyear_servers}>Customer Panel</h2>
             <p data-aos="fade-right" data-aos-duration="3000" className={styles.scale}>
               We provide a dedicated panel for our customers.
               Focusing on making the best customer experience,  while you are using our services you will have a personal username to use our bot and panel for your needs.      
             </p>
           </div>  
         </div>
       </div>
    </div>
  );
};

export default ThisYear;
