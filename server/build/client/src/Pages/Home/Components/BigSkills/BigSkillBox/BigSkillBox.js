import React from 'react';
import styles from './styles/bigskillbox.module.css';
const BigSkillBox = ({ icon, title, desc }) => {
    return (<>
            <div className={styles.bigskillbox} data-aos="fade-up">
                <div className={styles.logo}>{icon}</div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.desc}>{desc}</p>
                </div>
            </div>
        </>);
};
export default React.memo(BigSkillBox);
