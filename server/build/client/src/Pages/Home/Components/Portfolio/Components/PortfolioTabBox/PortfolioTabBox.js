import React from 'react';
import styles from './styles/portfoliotabbox.module.css';
const PortfolioTabBox = ({ active, onClick, title, Icon }) => {
    return (<>
            <div onClick={() => onClick()} onMouseEnter={() => onClick()} className={`${styles.portfoliotabbox} ${active ? styles.active : null}`}>
                <Icon className={styles.icon} size={30}/>
                <p className={styles.title}>{title}</p>
            </div>
        </>);
};
export default React.memo(PortfolioTabBox);
