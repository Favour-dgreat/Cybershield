
import { RegularButton } from '../../../../components/buttons';
import styles from "./showcase.module.css";


function Showcase() {
  return (
    <div className={styles.showcase_container}>
    <div className={styles.showcase_inner}>
      <p className={styles.sss}><span className={styles.showcase_span}>Safeguard your Digital Journey,</span></p>
      <p ><span className={styles.showcase_span2}>One Message at a time </span></p>
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
     
      </div>
      
    </div>
  );
}

export default Showcase;
