import styles from './thisyear.module.css';
import Image from '../../../../components/images';
import thisyearImg from '../../../../assets/pictures/chainy.png';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>

       <div className={styles.thisyear_inner}> 
       
        <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
           src={thisyearImg}
           className={styles.thisyear_image}
          />
        </div>
        
    </div>
  );
};

export default ThisYear;
