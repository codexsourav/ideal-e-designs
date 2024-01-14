import React from 'react';
import styles from './styles/skills.module.css';
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import SkillBox from './SkillBox/SkillBox';
import { FaRegMap } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
const Skills = () => {
    return (<>
            <div className={`${styles.skills} container`}>
                <ShowTitle title='How we Proceed?'/>
                <h1 className={styles.title} data-aos="fade-up">Our focused Process.</h1>
                <p className={styles.desc} data-aos="fade-up">Our approach is simplicity. allow a lean and gradual start, ensuring every step is taken without shortcuts</p>
                <div className={styles.skillsBoxes}>
                    <SkillBox icon={<FaRegMap size={45}/>} title='Discover' desc='We begin by attentively listening and distilling your concept to unveil the essence of your business objectives.'/>
                    <SkillBox icon={<TbPhotoFilled size={42}/>} title='Design' desc='This involves crafting a strategy that optimally enhances the user`s comprehensive journey from start to finish.'/>
                    <SkillBox icon={<FaCode size={45}/>} title='Develop' desc='Afterwards, our development team collaborates closely with the creative team to meticulously code the project."'/>
                    <SkillBox icon={<IoRocketOutline size={45}/>} title='Deploy' desc='An mobile application or a Website is ready to take off — build to fly, yet its true value emerges only when it takes off into the world."'/>
                </div>
            </div>
        </>);
};
export default React.memo(Skills);
