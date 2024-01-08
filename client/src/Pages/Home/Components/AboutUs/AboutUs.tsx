import React from 'react';
import styles from './styles/aboutus.module.css'
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';

const AboutUs = () => {
    return (
        <>
            <div className={`${styles.aboutus} container`}>
                <ShowTitle title='ABOUT OUR COMPANY' />
                <p className={styles.desc} data-aos="fade-up">We know what’s going on. You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming.</p>
            </div>
        </>
    );
};

export default React.memo(AboutUs);

