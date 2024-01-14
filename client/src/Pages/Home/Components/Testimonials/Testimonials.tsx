import React from 'react';
import styles from './styles/testimonials.module.css'
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
// import ReviewBox from './ReviewBox/ReviewBox';
// import CounterBox from './CounterBox/CounterBox';

const Testimonials = () => {

    return (
        <div className='container' >
            <div className={`${styles.testimonials}`}>
                <div className={styles.content}>
                    <ShowTitle title='Customer story' isLeft />
                    <p className={styles.desc} data-aos="fade-up">“Our growth no longer necessitates the recruitment and education of additional design professionals”</p>
                </div>
                <div className={styles.imageSection} data-aos="fade-left">
                    <img src="https://cdn.pixabay.com/photo/2020/07/11/23/36/meeting-5395615_960_720.jpg" alt="reviews" />
                </div>
            </div>
            <a href="#" className={styles.readBtn} data-aos="fade-up" >Read the story</a>
            {/* <div className={styles.reviews}>
                <ReviewBox rating={4} brandLogo='https://www.sibis.com.ua/wp-content/uploads/2017/06/Microsoft-logo.png' desc='"Creative, innovative and strategic. We have great achievements made together and looking to more"' name='Henry Arthur' location='Head of Engineering, Loom' />
                <ReviewBox rating={4.5} brandLogo='https://www.sibis.com.ua/wp-content/uploads/2017/06/Microsoft-logo.png' desc='"Creative, innovative and strategic. We have great achievements made together and looking to more"' name='Henry Arthur' location='Head of Engineering, Loom' />
                <ReviewBox rating={5} brandLogo='https://www.sibis.com.ua/wp-content/uploads/2017/06/Microsoft-logo.png' desc='"Creative, innovative and strategic. We have great achievements made together and looking to more"' name='Henry Arthur' location='Head of Engineering, Loom' />
            </div> */}
            {/* <div className={styles.counter} data-aos="fade-up">
                <CounterBox count='10K+' title='Happy Clients' />
                <CounterBox count='80+' title='App Developed' />
                <CounterBox count='5+' title='Years Experience' />
                <CounterBox count='10+' title='Our Team' />
            </div> */}
        </div>
    );
};

export default React.memo(Testimonials);

