import React from 'react';
import styles from './styles/services.module.css';
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import ServiceBox from './ServiceBox/ServiceBox';
import { IoLogoAndroid } from "react-icons/io";
import { FaApple, FaFirefoxBrowser } from "react-icons/fa";
import { SiAppwrite, SiGoogleads } from "react-icons/si";
import { LuPaintbrush } from "react-icons/lu";
const Services = () => {
    return (<>
            <div className={`${styles.services} container`}>
                <ShowTitle title='WHAT WE PROVIDE'/>
                <h1 className={styles.bgtitle} data-aos="fade-left">Services</h1>
                <div className={styles.content}>
                    <ServiceBox icon={<IoLogoAndroid size={35}/>} title='Android App Development' desc='Crafting cutting-edge Android applications that redefine user experiences, blending innovation with functionality for a mobile-centric world.'/>
                    <ServiceBox icon={<FaApple size={30}/>} title='iOS App Development' desc='Elevate your Apple ecosystem presence with bespoke iOS applications, designed for optimal performance and a seamless user journey.'/>
                    <ServiceBox icon={<SiAppwrite size={30}/>} title='Web App Development' desc='Transforming ideas into dynamic web applications, our development expertise ensures a powerful online presence and engaging user interactions.'/>
                    <ServiceBox icon={<FaFirefoxBrowser size={30}/>} title='Website Development' desc='From concept to reality, we specialize in creating responsive and visually stunning websites, tailored to meet your brand`s unique digital footprint.'/>
                    <ServiceBox icon={<LuPaintbrush size={30}/>} title='UI / UX Design' desc='Immerse your audience in visually appealing and user-centric designs, where aesthetics meet functionality to create unforgettable digital experiences.'/>
                    <ServiceBox icon={<SiGoogleads size={28}/>} title='Digital Marketing' desc='Boost your online visibility and engagement with our targeted Digital Marketing strategies, tailored to maximize reach and drive meaningful connections.'/>
                </div>
            </div>
        </>);
};
export default React.memo(Services);
