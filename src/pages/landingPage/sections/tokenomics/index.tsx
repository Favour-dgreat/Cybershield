import styles from './thisyear.module.css';
import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import thisyearImg1 from '../../../../assets/pictures/shape.png';

const ThisYear: React.FC = () => {
  
  useEffect(() => {
    const doAnimations = () => {
        const windowTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const offset = windowTop !== undefined && windowHeight !== undefined ? windowTop + windowHeight : 0;
              const $animatables = $('.animatable');

      if ($animatables.length === 0) {
        $(window).off('scroll', doAnimations);
      }

      $animatables.each(function (_i) {
        const $animatable = $(this);
        const animatableOffsetTop = $animatable.offset()?.top;
        const animatableHeight = $animatable.height();
        
        if (animatableOffsetTop !== undefined && animatableHeight !== undefined && animatableOffsetTop + animatableHeight - 20 < offset) {
          $animatable.remove('animatable').addClass('animated');
        }
      });
    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

    return () => {
      $(window).off('scroll', doAnimations);
    };
  }, []);
  return (
    <div id='tokenomics' className={styles.thisyear_container}>

<div style={{width: '100%', height: '100%', position: 'relative'}}>
<img
                src={thisyearImg1}
                className={styles.thisyear_image}
                alt="menu"
            />
    
    {/* <div style={{left: 488,  position: 'absolute'}} /> */}
    <div className={styles.thisyear_tokenomics}>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" className={styles.token}> Tokenomics </p>
        </div>
    
    <div className={styles.tokenomics}>
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" id='div1' className={styles.animatedDiv} >
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Total  Supply</div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 22.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word', paddingTop:20}}>100,000,000</div>
                
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 27.58, display: 'flex', paddingTop:20}}>
                    <div style={{width: 179.24, color: 'rgba(0, 212, 247, 0.94)', fontSize: 22.58, fontFamily: 'Montserrat', fontWeight: '400'}}>5% Marketing</div>
                </div>
                <br/>

            </div>
        </div>
    </div>

    <img
              src={thisyearImg1}
              className={styles.thisyear_image3}
              alt="menu"
            />
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom"  id='div2' className={styles.animatedDiv1} >
    <div style={{paddingLeft: 135, paddingRight: 164, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 0, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> CyberShield </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 22.41, display: 'flex'}}>
                <br/>                <br/>

                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 27.58, fontFamily: 'Montserrat', fontWeight: '400',  wordWrap: 'break-word'}}>$CSL</div>
            </div>
        </div>
    </div>
    </div>
    {/* <img
              src={thisyearImg2}
              className={styles.thisyear_image4}
              alt="menu"
            /> */}
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" id='div3' className={styles.animatedDiv2}>
    {/* <div style={{ paddingBottom: 14.68, paddingLeft: 135, paddingRight: 134, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 38.98, fontFamily: 'Montserrat', fontWeight: '700',  wordWrap: 'break-word'}}> Tax: 5% on buy/sell</div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12.41, display: 'flex'}}>
                <div style={{color: 'rgba(0, 212, 247, 0.94)', fontSize: 22.58, fontFamily: 'Montserrat', fontWeight: '400'}}>4% for marketing & development</div>
                <div style={{height: 22, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30.58, display: 'flex'}}>
                    <div style={{ color: 'rgba(0, 212, 247, 0.94)', fontSize: 22.58, fontFamily: 'Montserrat', fontWeight: '400'}}>1% for RevShare</div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<p data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" style={{marginTop:30}}><a href='https://assuredefi.com/projects/cybershield'><img src='https://assuredefi.com/wp-content/uploads/2023/03/assure-banners-icon-white-transparent.png' alt='Proudly Verified By Assure DeFi™' width='349px' /></a></p>

</div>
</div>

        
  );
};

export default ThisYear;
