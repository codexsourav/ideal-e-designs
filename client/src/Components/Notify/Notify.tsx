import React, { useState } from 'react';
import styles from './styles/notify.module.css'
import { GoArrowRight } from "react-icons/go";
import { showAsyncToast, showAsyncToastError, showAsyncToastSuccess } from '../../Lib/showToast';
import { AxiosError, AxiosResponse } from 'axios';
import makeApi from '../../Lib/makeApi';

const Notify = () => {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const subscribeNow = async () => {
        const mailloadingTost = showAsyncToast("Subscribing...");
        setLoading(true);
        try {
            const makeApiRequest: AxiosResponse = await makeApi({ path: '/api/subscribe', method: "POST", data: { email } });
            setLoading(false);
            if (makeApiRequest.status == 200) {
                showAsyncToastSuccess(mailloadingTost, makeApiRequest.data.message || "Subscribe Successfully");
                setEmail("");

            } else {
                showAsyncToastError(mailloadingTost, makeApiRequest.data.message || "Subscribe Successfully");
            }
        } catch (error) {
            setLoading(false);
            if (error instanceof AxiosError) {
                showAsyncToastError(mailloadingTost, error.response?.data.message || "Subscribe Request Send Field");
            } else {
                showAsyncToastError(mailloadingTost, "Subscribe Request Field");
            }
        }
    }

    return (
        <>
            <div className={`${styles.notify} container`} data-aos="fade-up">
                <div className={styles.notifyMe}>
                    <h1 className={styles.title}>Let's Connected Together</h1>
                    <p className={styles.desc}>Get ready to start producing stunning, efficient design work without the hassles of hiring. Soon available.</p>
                    <div className={styles.inputSection}>
                        <input name="email" type="email" placeholder="Email ID" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className={styles.sendBtn} disabled={loading} onClick={subscribeNow} >Get Notify</button>
                        <button className={styles.sendBtnMob} disabled={loading} style={{ display: "none" }} onClick={subscribeNow}><GoArrowRight color="#fff" size={30} /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Notify);

