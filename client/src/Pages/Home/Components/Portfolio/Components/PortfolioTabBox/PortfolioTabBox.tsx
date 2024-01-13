import React from 'react';
import styles from './styles/portfoliotabbox.module.css'
import { IconType } from 'react-icons';



const PortfolioTabBox = ({ active, onClick, title, Icon }: { active: boolean, onClick: Function, title: string, Icon: IconType }) => {
    return (
        <>
            <div onClick={() => onClick()} onMouseEnter={() => onClick()} className={`${styles.portfoliotabbox} ${active ? styles.active : null}`}>
                <Icon className={styles.icon} size={30} />
                <p className={styles.title}>{title}</p>
            </div>
        </>
    );
};

export default React.memo(PortfolioTabBox);

