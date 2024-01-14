import React from 'react';
import styles from './styles/portfoliotab.module.css';
import PortfolioTabBox from '../PortfolioTabBox/PortfolioTabBox';
import { FaPersonRunning, FaGraduationCap, FaUserDoctor } from "react-icons/fa6";
import { PiLaptopFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
const PortfolioTab = ({ index, onChange }) => {
    return (<>
            <div className={styles.portfoliotab} data-aos="fade-up">
                <PortfolioTabBox Icon={FaPersonRunning} title='Fitness' active={index == 0} onClick={() => onChange(0)}/>
                <PortfolioTabBox Icon={FaGraduationCap} title='Education' active={index == 1} onClick={() => onChange(1)}/>
                <PortfolioTabBox Icon={FaUserDoctor} title='Medical' active={index == 2} onClick={() => onChange(2)}/>
                <PortfolioTabBox Icon={PiLaptopFill} title='Booking' active={index == 3} onClick={() => onChange(3)}/>
                <PortfolioTabBox Icon={FaCode} title='Custom' active={index == 4} onClick={() => onChange(4)}/>
            </div>
        </>);
};
export default React.memo(PortfolioTab);
