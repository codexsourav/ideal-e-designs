import React, { useEffect } from 'react';
import styles from './styles/contactpopup.module.css'
import { useSelector } from 'react-redux';
import StoreType from '../../Interfaces/storeInterface';
import ContactForm from './ContactForm/ContactForm';



const ContactPopUp = () => {
    const contactPopUpState = useSelector((state: StoreType) => state.contactpopup);

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
                {!contactPopUpState.show ? null : <ContactForm isfooter={false} />}
            </div>
        </>
    );
};

export default React.memo(ContactPopUp);

