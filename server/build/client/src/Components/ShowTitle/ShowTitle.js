import React from 'react';
import styles from './styles/showtitle.module.css';
const ShowTitle = ({ title, isLeft = false, animate = "fade-up" }) => {
    return (<>
            <div className={`${isLeft ? styles.showtitleLeft : styles.showtitle}`} data-aos={animate}>
                <p>{title}</p>
                <div className={styles.line}></div>
            </div>
        </>);
};
export default React.memo(ShowTitle);
