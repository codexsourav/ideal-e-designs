import React from 'react';
import styles from './styles/bigskills.module.css';
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import BigSkillBox from './BigSkillBox/BigSkillBox';
import { FaRegMap } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
const BigSkills = () => {
    return (<>
            <div className={`${styles.bigskills} container`}>
                <ShowTitle title='From Idea to Implementation'/>

                <h1 className={styles.title} data-aos="fade-up">Our area of Abilities</h1>
                <p className={styles.desc} data-aos="fade-up">Our strategy is simplicity. Yes, go lean and start small but don’t skip steps.</p>
                <h1 className={styles.bgtitle} data-aos="fade-left">SKILLS</h1>
                <div className={styles.content}>
                    <div className={styles.imageSec} data-aos="fade-right">
                        <img src='/skill.png'/>
                    </div>
                    <div className={styles.skillsSection}>

                        <BigSkillBox icon={<FaRegMap size={45}/>} title='Brand Strategy' desc='Every business, team, and individual possesses a brand, whether consciously acknowledged or not. We ensure that yours truly mirrors your identity.'/>
                        <BigSkillBox icon={<TbPhotoFilled size={42}/>} title='Product Design UI/UX' desc='The harmonious blend of aesthetics and functionality cultivates unwavering brand loyalty from engaged consumers.'/>
                        <BigSkillBox icon={<FaCode size={45}/>} title='Product Strategy' desc='With a scalable plan in place, we streamline, eliminate, and focus, ensuring the removal of all unnecessary baggage to optimize efficiency.'/>
                        <BigSkillBox icon={<FaLaptopCode size={45}/>} title='Software Development' desc='Our enchantment lies in our team of multilingual developers, so deeply immersed in their work that they even dream in code.'/>
                        <BigSkillBox icon={<SiGoogleads size={45}/>} title='Digital Marketing' desc='Sharply concentrated and directed toward aligning with the needs of your consumers and the objectives of your company.'/>

                    </div>

                </div>
            </div>
        </>);
};
export default React.memo(BigSkills);
