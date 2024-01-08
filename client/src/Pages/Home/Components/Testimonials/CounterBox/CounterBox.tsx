import React from 'react';
import styles from './styles/counterbox.module.css'

const CounterBox = ({ count, title }: { count: string, title: string }) => {
    return (
        <>
            <div className={styles.counterbox} data-aos="fade-up">
                <h1 className={styles.number}>{count}</h1>
                <p className={styles.title}>{title}</p>
            </div>
        </>
    );
};

export default React.memo(CounterBox);

