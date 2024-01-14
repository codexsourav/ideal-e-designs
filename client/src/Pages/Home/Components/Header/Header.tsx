import React from 'react';
import styles from './styles/header.module.css'
import MobileFream from '../../../../Components/MobileFream/MobileFream';
import { useDispatch } from 'react-redux';

import { setContactPopUp } from '../../../../Redux/ContactPopUp/contactpopup';
import { useWindowScrollPositions } from '../../../../Hooks/useWindowScrollPositions';

const Header = () => {
    const dispatch = useDispatch();
    const { scrollY } = useWindowScrollPositions();
    return (
        <div className={`${styles.headerSection} container`}>
            <div className={`${styles.header} `}>
                <div className={styles.phoneSection}>
                    <MobileFream />
                </div>
                <div className={styles.contentSection}>
                    <h1 className={styles.title} data-aos="fade-up">Transforming Idea’s through Technology</h1>
                    <p className={styles.desc} data-aos="fade-up" data-aos-delay="500">Empowering  your Idea with the seamless fusion of innovation and technology. witness your ideas evolving into reality, shaped by the transformative force of cutting-edge technological solutions.</p>
                    <div className={styles.action} >
                        <button onClick={() => dispatch(setContactPopUp(true))} className={styles.actionBtn}>LET`S TALK</button>
                    </div>
                </div>
            </div>
            {scrollY > 10 ? null : <div className={styles.mouse}>
                <div className={styles.mouseBtn}></div>
            </div>}
        </div>
    );
};

export default React.memo(Header);

