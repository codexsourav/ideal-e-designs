import React from 'react';
import styles from './styles/reviewbox.module.css'
import RatingBox from '../../../../../Components/RatingBox/RatingBox';

const ReviewBox = ({ brandLogo, desc, name, location, rating }: { rating: number, brandLogo: string, desc: string, name: string, location: string }) => {
    return (
        <>
            <div className={styles.reviewbox} data-aos="fade-up" >
                <img className={styles.brand} width={100} src={brandLogo} alt={"brandLogo " + name} />
                <div className={styles.desc}>{desc}</div>
                <RatingBox value={rating} />
                <div className={styles.name}>{name}</div>
                <div className={styles.location}>{location}</div>
            </div>
        </>
    );
};

export default React.memo(ReviewBox);

