import React, { useEffect, useState } from 'react';
import styles from './styles/contactpopup.module.css'
import ShowTitle from '../ShowTitle/ShowTitle';
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import StoreType, { AppDispatch } from '../../Interfaces/storeInterface';
import { setContactPopUp } from '../../Redux/ContactPopUp/contactpopup';
import makeApi from '../../Lib/makeApi';
import { showAsyncToast, showAsyncToastError, showAsyncToastSuccess } from '../../Lib/showToast';
import { AxiosError, AxiosResponse } from 'axios';


const ContactPopUp = () => {

    interface IEmails {
        name: string;
        email: string;
        phone: string | number;
        message: string;
    }

    const [formData, setFormData] = useState<IEmails>({ email: "", message: "", name: "", phone: "" });
    const [isLoading, setisLoading] = useState<boolean>(false);

    const handelFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const contactPopUpState = useSelector((state: StoreType) => state.contactpopup);


    const dispatch = useDispatch<AppDispatch>();


    const sendNewMail = async () => {
        const mailloadingTost = showAsyncToast("Sending Email");
        setisLoading(true);
        try {
            const makeApiRequest: AxiosResponse = await makeApi({ path: '/api/sendmail', method: "POST", data: formData });
            setisLoading(false);
            if (makeApiRequest.status == 200) {
                showAsyncToastSuccess(mailloadingTost, makeApiRequest.data.message || "Email Send Successfully");
                setFormData({ email: "", message: "", name: "", phone: "" });
                dispatch(setContactPopUp(false));
            } else {
                showAsyncToastError(mailloadingTost, makeApiRequest.data.message || "Email Send Successfully");
            }
        } catch (error) {
            setisLoading(false);
            if (error instanceof AxiosError) {
                showAsyncToastError(mailloadingTost, error.response?.data.message || "Email Send Field");
            } else {
                showAsyncToastError(mailloadingTost, "Email Send Field");
            }
        }
    }


    useEffect(() => {
        if (contactPopUpState.show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [contactPopUpState]);

    return (
        <>
            <div className={`${styles.contactpopup} ${contactPopUpState.show ? styles.showPopUp : null}`}>
                {!contactPopUpState.show ? null : <div className={`${styles.contactView}  ${contactPopUpState.show ? styles.activeView : null}`}>
                    <TfiClose className={styles.close} size={30} onClick={() => dispatch(setContactPopUp(false))} />
                    <ShowTitle title='CONTACT US' animate={null} />
                    <div className={styles.form}>
                        <div className={styles.contacts}>
                            <input name="name" type="text" value={formData.name} onChange={handelFormData} placeholder="Your Name" className={styles.input} />
                            <input name="email" type="text" value={formData.email} onChange={handelFormData} placeholder="Email ID" className={styles.input} />
                            <input name="phone" type="text" value={formData.phone} onChange={handelFormData} placeholder="Mobile NO." className={styles.input} />
                        </div>
                        <div className={styles.messageSec}>
                            <textarea name="message" value={formData.message} onChange={handelFormData} className={`${styles.input} ${styles.msg}`} placeholder='Your Message' />
                        </div>
                    </div>
                    <button className={styles.submitBtn} onClick={sendNewMail} disabled={isLoading} >{isLoading ? "SENDING" : "SEND EMAIL"}</button>
                </div>}
            </div>
        </>
    );
};

export default React.memo(ContactPopUp);

