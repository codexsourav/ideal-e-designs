import React from 'react';
import styles from './styles/header.module.css'
import MobileFream from '../../../../Components/MobileFream/MobileFream';
import { useDispatch } from 'react-redux';

import { setContactPopUp } from '../../../../Redux/ContactPopUp/contactpopup';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className={`${styles.headerSection} container`}>
            <div className={`${styles.header} `}>
                <div className={styles.phoneSection}>
                    <MobileFream />
                </div>
                <div className={styles.contentSection}>
                    <h1 className={styles.title} data-aos="fade-up">Transforming Idea’s through Technology</h1>
                    <p className={styles.desc} data-aos="fade-up" data-aos-delay="500">Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology. Arriving shortly.</p>
                    <div className={styles.action} >
                        <button onClick={() => dispatch(setContactPopUp(true))} className={styles.actionBtn}>LET`S TALK</button>
                    </div>
                </div>
            </div>
            <div className={styles.mouse}>
                <div className={styles.mouseBtn}></div>
            </div>
        </div>
    );
};

export default React.memo(Header);

