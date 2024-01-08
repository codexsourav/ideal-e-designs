import React, { useState } from 'react';
import styles from './styles/faqbox.module.css'
import { RxPlus } from "react-icons/rx";

const FAQBox = ({ ans, qus }: { qus: string, ans: string }) => {
    const [showFaq, setshowFaq] = useState(false);
    return (
        <>
            <div className={`${styles.faqbox}`} data-aos="fade-up">
                <div className={`${styles.qbox}  ${showFaq ? styles.faqboxactive : null}`}>
                    <div className={styles.query} onClick={() => setshowFaq(!showFaq)}>
                        <p className={styles.qus}>{qus}</p>
                        <RxPlus className={styles.plus} size={22} color="#fff" />
                    </div>
                    {showFaq ? <div className={styles.answer}>{ans}</div> : null}
                </div>
            </div>
        </>
    );
};

export default React.memo(FAQBox);

