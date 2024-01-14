import React from 'react';
import styles from './styles/skillbox.module.css';
const SkillBox = ({ icon, title, desc }) => {
    return (<>
            <div className={styles.skillbox} data-aos="fade-up">
                <div className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </>);
};
export default React.memo(SkillBox);
