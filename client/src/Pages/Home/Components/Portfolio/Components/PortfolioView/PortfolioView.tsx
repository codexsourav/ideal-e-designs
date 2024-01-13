import React from 'react';
import styles from './styles/portfolioview.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";

const PortfolioView = ({ desc, image, title, mobImage }: { title: string, mobImage: string, image: string, desc: string }) => {
    return (
        <>
            <div className={styles.portfolioview} data-aos="fade-up">
                <img src={image} className={styles.pc} />
                <img src={mobImage} className={styles.mobile} style={{ display: "none" }} />

                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <a href="#"><IoIosArrowRoundForward className={styles.icon} /></a>
                </div>
            </div>
        </>
    );
};

export default React.memo(PortfolioView);

