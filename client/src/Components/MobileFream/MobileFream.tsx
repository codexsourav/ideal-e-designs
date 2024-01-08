import React from 'react';
import styles from './styles/mobilefream.module.css'

const MobileFream = () => {
    return (
        <>
            <div className={styles.mobilefream}>
                <img src='/mobile.png' />
                <div className={styles.screen}></div>
            </div>
        </>
    );
};

export default React.memo(MobileFream);

