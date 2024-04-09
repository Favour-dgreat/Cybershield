import styles from './thisyear.module.css';
// import Image from '../../../../components/images';
import thisfeature1Img from '../../../../assets/pictures/twitter.jpg';
import thisfeature2Img from '../../../../assets/pictures/telegram.png';
// import thisfeature2Img from '../../../../assets/pictures/Features2.png';
// import thisfeature3Img from '../../../../assets/pictures/Features 3.png';

const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>

<div id='div1' style={{width: '100%', height: '100%', position: 'relative', paddingBottom: '30%'}}>
    <div style={{width: 1293, height: 69, left: 0, top: 0, position: 'absolute'}}></div>
    <div className={styles.thriving} >Join a thriving community</div>
    <div className={styles.popoutDiv1} >
        <div className={styles.popout1}>
            <img className={styles.imageitself1}  src={thisfeature1Img} />
            <div style={{color: 'white', fontSize: 29.60, fontFamily: 'Montserrat', fontWeight: '500',  wordWrap: 'break-word'}}>$DPS Twitter</div>
        </div>
    </div>
    <div className={styles.popoutDiv2}>
        <div className={styles.popout2}>
            <img className={styles.imageitself2}  src={thisfeature2Img} />
            <div style={{color: 'white', fontSize: 28.80, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>$DPS Telegram</div>
        </div>
    </div>
</div>
    </div>
  );
};

export default ThisYear;
