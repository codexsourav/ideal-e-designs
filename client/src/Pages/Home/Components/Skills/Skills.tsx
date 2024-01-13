import React from 'react';
import styles from './styles/skills.module.css'
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import SkillBox from './SkillBox/SkillBox';
import { FaRegMap } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

const Skills = () => {
    return (
        <>
            <div className={`${styles.skills} container`}>
                <ShowTitle title='BADASS SKILLS' />
                <h1 className={styles.title} data-aos="fade-up">Areas of expertise.</h1>
                <p className={styles.desc} data-aos="fade-up">Our strategy is simplicity. Yes, go lean and start small but don’t skip steps.</p>
                <div className={styles.skillsBoxes}>
                    <SkillBox icon={<FaRegMap size={45} />} title='Discover' desc='Uncover potential and refine your vision with our expert discovery process.' />
                    <SkillBox icon={<TbPhotoFilled size={42} />} title='Design' desc='Immerse yourself in captivating and functional designs tailored to your brand.' />
                    <SkillBox icon={<FaCode size={45} />} title='Develop' desc='Witness your vision come to life through our meticulous development process.' />
                    <SkillBox icon={<IoRocketOutline size={45} />} title='Deploy' desc='Seamlessly launch and integrate your solutions with confidence.' />
                </div>
            </div>
        </>
    );
};

export default React.memo(Skills);