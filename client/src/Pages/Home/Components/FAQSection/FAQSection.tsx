import React from 'react';
import styles from './styles/faqsection.module.css'
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import FAQBox from './FAQBox/FAQBox';

const FAQSection = () => {
    return (
        <>
            <div className={`${styles.faqsection} container`}>
                <ShowTitle title='FAQ Questions' />
                <h1 className={styles.title} data-aos="fade-up">We’ve got the answers</h1>
                <div className={styles.content}>
                    <FAQBox qus=' debitis earum animi nesciunt ducimus vitae? ' ans='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, saepe delectus, obcaecati alias quasi architecto commodi reprehenderit non adipisci magnam, tempore debitis earum animi nesciunt ducimus vitae? Ex, tempora maxime?' />
                    <FAQBox qus=' debitis earum animi nesciunt ducimus vitae? ' ans='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, saepe delectus, obcaecati alias quasi architecto commodi reprehenderit non adipisci magnam, tempore debitis earum animi nesciunt ducimus vitae? Ex, tempora maxime?' />
                    <FAQBox qus=' debitis earum animi nesciunt ducimus vitae? ' ans='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, saepe delectus, obcaecati alias quasi architecto commodi reprehenderit non adipisci magnam, tempore debitis earum animi nesciunt ducimus vitae? Ex, tempora maxime?' />
                    <FAQBox qus=' debitis earum animi nesciunt ducimus vitae? ' ans='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, saepe delectus, obcaecati alias quasi architecto commodi reprehenderit non adipisci magnam, tempore debitis earum animi nesciunt ducimus vitae? Ex, tempora maxime?' />
                    <FAQBox qus='tempore debitis earum animi nesciunt ducimus vitae? ' ans='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, saepe delectus, obcaecati alias quasi architecto commodi reprehenderit non adipisci magnam, tempore debitis earum animi nesciunt ducimus vitae? Ex, tempora maxime?' />


                </div>
            </div>
        </>
    );
};

export default React.memo(FAQSection);

