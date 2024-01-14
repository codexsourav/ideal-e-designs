import ShowTitle from '../../ShowTitle/ShowTitle';
import { TfiClose } from "react-icons/tfi";
import styles from './styles/contactform.module.css'
import { showAsyncToast, showAsyncToastError, showAsyncToastSuccess } from '../../../Lib/showToast';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreType, { AppDispatch } from '../../../Interfaces/storeInterface';
import { AxiosError, AxiosResponse } from 'axios';
import makeApi from '../../../Lib/makeApi';
import { setContactPopUp } from '../../../Redux/ContactPopUp/contactpopup';

function ContactForm({ isfooter = false }: { isfooter?: boolean }) {
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

    return (
        <div className={`${isfooter ? styles.footer : styles.contactView}`}>
            {isfooter ? null : <TfiClose className={styles.close} size={30} onClick={() => dispatch(setContactPopUp(false))} />}
            <ShowTitle title='CONTACT US' animate={null} />
            <div className={`${styles.form} ${isfooter ? styles.footer : null}`}>
                <div className={styles.contacts}>
                    <input name="name" type="text" value={formData.name} onChange={handelFormData} placeholder="Your Name" className={styles.input} />
                    <input name="email" type="text" value={formData.email} onChange={handelFormData} placeholder="Email ID" className={styles.input} />
                    <input name="phone" type="text" value={formData.phone} onChange={handelFormData} placeholder="Mobile NO." className={styles.input} />
                </div>
                <div className={styles.messageSec}>
                    <textarea name="message" value={formData.message} onChange={handelFormData} className={`${styles.input} ${styles.msg}`} placeholder='Your Message' />
                </div>
            </div>
            <button className={styles.submitBtn} onClick={sendNewMail} disabled={isLoading} >{isLoading ? "SENDING" : "SEND"}</button>
        </div>
    )
}
export default ContactForm