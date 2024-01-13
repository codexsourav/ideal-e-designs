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
                    <FAQBox qus='How do I get started with your services?' ans='To get started, simply reach out to us through our contact page, and our dedicated team will guide you through the onboarding process, understanding your unique requirements.' />
                    <FAQBox qus='What sets your Android and iOS app development apart?' ans='Our Android and iOS app development stands out for its innovative approach, seamless user experience, and rigorous testing, ensuring your app meets the highest standards in performance and functionality.' />
                    <FAQBox qus='Can you explain the process of website development with your team?' ans='Our Android and iOS app development stands out for its innovative approach, seamless user experience, and rigorous testing, ensuring your app meets the highest standards in performance and functionality.' />
                    <FAQBox qus='What makes your UI/UX design approach unique and user-friendly?' ans='Our UI/UX design focuses on creating visually appealing interfaces while prioritizing user experience. We employ user-centric design principles to ensure intuitive navigation and engagement.' />
                    <FAQBox qus='How does your digital marketing strategy differ from others in the industry?' ans='Our digital marketing strategy is tailored to your specific goals, leveraging targeted approaches across various channels. We emphasize data-driven decisions, ensuring effective campaigns that resonate with your audience.' />
                    <FAQBox qus='What types of projects or industries do you specialize in for web app development?' ans='    We specialize in a diverse range of projects across industries, including e-commerce, healthcare, finance, and more. Our flexible approach allows us to adapt our expertise to meet the unique needs of each project.' />
                </div>
            </div>
        </>
    );
};

export default React.memo(FAQSection);

