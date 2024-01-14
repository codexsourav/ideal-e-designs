var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ShowTitle from '../../ShowTitle/ShowTitle';
import { TfiClose } from "react-icons/tfi";
import styles from './styles/contactform.module.css';
import { showAsyncToast, showAsyncToastError, showAsyncToastSuccess } from '../../../Lib/showToast';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import makeApi from '../../../Lib/makeApi';
import { setContactPopUp } from '../../../Redux/ContactPopUp/contactpopup';
function ContactForm({ isfooter = false }) {
    const [formData, setFormData] = useState({ email: "", message: "", name: "", phone: "" });
    const [isLoading, setisLoading] = useState(false);
    const handelFormData = (e) => setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    const dispatch = useDispatch();
    const sendNewMail = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const mailloadingTost = showAsyncToast("Sending Email");
        setisLoading(true);
        try {
            const makeApiRequest = yield makeApi({ path: '/api/sendmail', method: "POST", data: formData });
            setisLoading(false);
            if (makeApiRequest.status == 200) {
                showAsyncToastSuccess(mailloadingTost, makeApiRequest.data.message || "Email Send Successfully");
                setFormData({ email: "", message: "", name: "", phone: "" });
                dispatch(setContactPopUp(false));
            }
            else {
                showAsyncToastError(mailloadingTost, makeApiRequest.data.message || "Email Send Successfully");
            }
        }
        catch (error) {
            setisLoading(false);
            if (error instanceof AxiosError) {
                showAsyncToastError(mailloadingTost, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message) || "Email Send Field");
            }
            else {
                showAsyncToastError(mailloadingTost, "Email Send Field");
            }
        }
    });
    return (<div className={`${isfooter ? styles.footer : styles.contactView}`}>
            {isfooter ? null : <TfiClose className={styles.close} size={30} onClick={() => dispatch(setContactPopUp(false))}/>}
            <ShowTitle title='CONTACT US' animate={null}/>
            <div className={`${styles.form} ${isfooter ? styles.footer : null}`}>
                <div className={styles.contacts}>
                    <input name="name" type="text" value={formData.name} onChange={handelFormData} placeholder="Your Name" className={styles.input}/>
                    <input name="email" type="text" value={formData.email} onChange={handelFormData} placeholder="Email ID" className={styles.input}/>
                    <input name="phone" type="text" value={formData.phone} onChange={handelFormData} placeholder="Mobile NO." className={styles.input}/>
                </div>
                <div className={styles.messageSec}>
                    <textarea name="message" value={formData.message} onChange={handelFormData} className={`${styles.input} ${styles.msg}`} placeholder='Your Message'/>
                </div>
            </div>
            <button className={styles.submitBtn} onClick={sendNewMail} disabled={isLoading}>{isLoading ? "SENDING" : "SEND"}</button>
        </div>);
}
export default ContactForm;
