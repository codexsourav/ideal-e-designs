import React from 'react';
import styles from './styles/mobilefream.module.css'
const MobileFream = () => {
    return (
        <>
            <div className={styles.mobilefream}>
                <img src='/mobile.png' />

                <div className={styles.screen}>
                    {/* <video src='/videos/Hello.mp4' autoPlay={true} loop={true}  ></video> */}
                    <img src="/videos/Hello.gif" alt="" />
                </div>
            </div>
        </>
    );
};

export default React.memo(MobileFream);

