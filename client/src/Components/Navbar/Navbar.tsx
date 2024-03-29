import React, { useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import styles from './styles/navbar.module.css'
import { RiCustomerService2Line } from "react-icons/ri";
import { useWindowIsScroll } from '../../Hooks/useWindowIsScroll';
import { useWindowScrollPositions } from '../../Hooks/useWindowScrollPositions';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const isScroll = useWindowIsScroll();
    const { scrollY } = useWindowScrollPositions();
    const location = useLocation();
    useEffect(() => {
        if (showNav) {
            setShowNav(false);
        }
    }, [location]);


    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [showNav]);


    return (

        <>
            <div className={`${styles.navbar} ${scrollY <= 0 ? null : (isScroll ? styles.navbarShow : styles.navbarHide)}  `} >
                <div className={styles.logoSection} >
                    <FiMenu className={styles.menuBtn} size={25} style={{ display: "none" }} onClick={() => setShowNav(true)} />
                    <img src='/logo.png' alt="our logo" className={styles.logo} height={60} />
                </div>
                <div className={`${styles.menuSection} ${showNav ? styles.showMenuSection : null}`}>
                    <IoCloseOutline className={styles.menuCloseBtn} size={50} style={{ display: "none" }} onClick={() => setShowNav(false)} />
                    <ul className={styles.menu}>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#about">About US</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Our Work</a></li>
                    </ul>
                </div>
                <div className={styles.actions} >
                    <a href="mailto:info@idealedesigns.com?bcc=aryamehtaa@gmail.com" className={styles.menuSupportBtn} style={{ display: "none", color: "#fff" }}  ><RiCustomerService2Line size={25} /></a>
                    {/* <button className={styles.actionBtn} >Email Us</button> */}
                    <a href='mailto:info@idealedesigns.com?bcc=aryamehtaa@gmail.com' className={styles.actionBtn} >Email Us</a>

                </div>
            </div>
        </>
    );
};

export default React.memo(Navbar);

