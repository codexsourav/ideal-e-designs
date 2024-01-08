import React from 'react';
import styles from './styles/services.module.css'
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import ServiceBox from './ServiceBox/ServiceBox';
import { IoLogoAndroid } from "react-icons/io";
import { FaApple, FaFirefoxBrowser } from "react-icons/fa";
import { SiAppwrite, SiGoogleads } from "react-icons/si";
import { LuPaintbrush } from "react-icons/lu";

const Services = () => {
    return (
        <>
            <div className={`${styles.services} container`}>
                <ShowTitle title='WHAT WE PROVIDE' />
                <h1 className={styles.bgtitle} data-aos="fade-left">Services</h1>
                <div className={styles.content}>
                    <ServiceBox icon={<IoLogoAndroid size={35} />} title='Android App Development' desc='Choose a plan and share your design project details with us: we’re here to listen.' />
                    <ServiceBox icon={<FaApple size={30} />} title='iOS App Development' desc='Choose a plan and share your design project details with us: we’re here to listen.' />
                    <ServiceBox icon={<SiAppwrite size={30} />} title='Web App Development' desc='Choose a plan and share your design project details with us: we’re here to listen.' />
                    <ServiceBox icon={<FaFirefoxBrowser size={30} />} title='Website Development' desc='Choose a plan and share your design project details with us: we’re here to listen.' />
                    <ServiceBox icon={<LuPaintbrush size={30} />} title='UI / UX Design' desc='Choose a plan and share your design project details with us: we’re here to listen.' />
                    <ServiceBox icon={<SiGoogleads size={28} />} title='Digital Marketing' desc='Choose a plan and share your design project details with us: we’re here to listen.' />
                </div>
            </div>
        </>
    );
};

export default React.memo(Services);

