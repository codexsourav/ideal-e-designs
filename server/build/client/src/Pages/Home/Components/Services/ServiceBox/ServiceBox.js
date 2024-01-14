import React from 'react';
import styles from './styles/servicebox.module.css';
const ServiceBox = ({ icon, title, desc }) => {
    return (<>
            <div className={styles.servicebox} data-aos="fade-up">
                <div className={styles.logo}>
                    {icon}
                </div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
            </div>
        </>);
};
export default React.memo(ServiceBox);
