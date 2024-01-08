import React from 'react';
import styles from './styles/laptopview.module.css'

const LaptopView = () => {
    return (
        <>
            <div className={styles.laptopview} data-aos="fade-up">
                <img src="https://www.catalogmachine.com/client/img/site/landing/landing3/laptop-frame.png" alt="laptop" />
                <div className={styles.screen}>
                    <video src='/video.mp4' autoPlay loop muted />
                </div>
            </div>
        </>
    );
};

export default React.memo(LaptopView);

