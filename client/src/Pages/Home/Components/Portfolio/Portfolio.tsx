import React, { useState } from 'react';
import styles from './styles/portfolio.module.css'
import PortfolioTab from './Components/PortfolioTab/PortfolioTab';
import PortfolioView from './Components/PortfolioView/PortfolioView';
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import { portfolioData } from '../../../../data/portfolio';

const Portfolio = () => {
    const [tabinex, setTabinex] = useState<number>(0)
    return (
        <>
            <div className={`${styles.portfolio} container`}>
                <h1 className={styles.bgtitle} data-aos="fade-left" >WORK</h1>
                <div className={styles.titleSection}>
                    <ShowTitle title='Our Outstanding Work' />
                </div>
                <PortfolioTab index={tabinex} onChange={setTabinex} />
                <div className={styles.viewContent}>
                    {
                        portfolioData[tabinex].map((e, i) => {
                            return <PortfolioView key={e!.title + "-" + i} image={e!.image} desc={e!.desc} title={e!.title} mobImage={e!.mobImage} />

                        })
                    }
                </div>
            </div>
        </>
    );
};

export default React.memo(Portfolio);

