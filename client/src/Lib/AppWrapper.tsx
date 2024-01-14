import React, { ReactNode, useEffect } from 'react';
import Loader from '../utils/Loader';
import Navbar from '../Components/Navbar/Navbar';
import Notify from '../Components/Notify/Notify';
import Footer from '../Components/Footer/Footer';
import AnimatedCursor from 'react-animated-cursor';
import Aos from 'aos';
import ContactPopUp from '../Components/ContactPopUp/ContactPopUp';
import { ToastContainer } from 'react-toastify';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import ContactForm from '../Components/ContactPopUp/ContactForm/ContactForm';

interface AppWrapperProps {
    children: ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    const { width } = useWindowDimensions();
    useEffect(() => {
        Aos.init({ duration: 1400 });

    }, []);

    return <>
        <Loader />
        <Navbar />
        {children}
        <ContactForm isfooter={true} />
        <Notify />
        <Footer />
        <ContactPopUp />
        {/* <AnimatedCursor
            innerSize={10}
            outerSize={40}
            innerScale={1}
            outerScale={1.5}
            outerAlpha={0}
            innerStyle={{
                backgroundColor: '#fff',
                zIndex: "9999999",
                boxShadow: "0px 0px 15px -3px rgba(255,255,255,0.9)",
            }}
            outerStyle={{
                border: '3px solid #ffffff50',
                zIndex: "9999999",
            }} /> */}
        <ToastContainer
            position={width > 600 ? "top-right" : "bottom-center"}
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

    </>;
};

export default React.memo(AppWrapper);
