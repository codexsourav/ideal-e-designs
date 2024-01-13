import React from 'react';
import styles from './styles/bigskills.module.css'
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import BigSkillBox from './BigSkillBox/BigSkillBox';
import { FaRegMap } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

const BigSkills = () => {
    return (
        <>
            <div className={`${styles.bigskills} container`}>
                <ShowTitle title='BADASS SKILLS' />

                <h1 className={styles.title} data-aos="fade-up">Areas of expertise.</h1>
                <p className={styles.desc} data-aos="fade-up">Our strategy is simplicity. Yes, go lean and start small but don’t skip steps.</p>
                <h1 className={styles.bgtitle} data-aos="fade-left" >SKILLS</h1>
                <div className={styles.content}>
                    <div className={styles.imageSec} data-aos="fade-right">
                        <img src='/skill.png' />
                    </div>
                    <div className={styles.skillsSection}>

                        <BigSkillBox icon={<FaRegMap size={45} />} title='Discover' desc='Embark on a visionary odyssey with our expert discovery process, unlocking the latent potential of your ideas and paving the way for a transformative digital journey.' />
                        <BigSkillBox icon={<TbPhotoFilled size={42} />} title='Design' desc='Immerse yourself in a realm of captivating and functional designs, meticulously tailored to elevate your brand, ensuring an unparalleled and engaging user experience.' />
                        <BigSkillBox icon={<FaCode size={45} />} title='Develop' desc='Watch your vision come alive through our alchemy of innovation and precision, crafting robust and scalable solutions that stand at the forefront of digital prowess.' />
                        <BigSkillBox icon={<IoRocketOutline size={45} />} title='Deploy' desc=' Unleash your creations seamlessly onto the digital canvas, as we orchestrate a flawless deployment, optimizing performance and ensuring user satisfaction. At Ideal-E-Designs, we turn concepts into captivating realities.' />

                    </div>

                </div>
            </div>
        </>
    );

};

export default React.memo(BigSkills);

