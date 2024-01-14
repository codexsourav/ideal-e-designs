import React, { useState } from 'react';
import styles from './styles/videossection.module.css';
import ShowTitle from '../../../../Components/ShowTitle/ShowTitle';
import { FaCirclePlay } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
const VideosSection = () => {
    const [url, seturl] = useState("");
    return (<>
            <div className={`${styles.videossection} container`}>
                <ShowTitle title='Watch Our Journey'/>
                <div className={styles.content}>
                    <div className={styles.video} data-aos="fade-up">
                        <FaCirclePlay className={styles.play} size={80} onClick={() => seturl("/video.mp4")}/>
                        <img src='https://cdn.pixabay.com/photo/2019/05/27/22/56/planner-4233900_960_720.jpg' alt='video1'/>
                    </div>
                    <div className={styles.more}>
                        <div className={styles.video} data-aos="fade-up">
                            <FaCirclePlay className={styles.play} size={80} onClick={() => seturl("/video.mp4")}/>

                            <img src='https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_960_720.jpg' alt='video2'/>
                        </div>
                        <div className={styles.video} data-aos="fade-up">
                            <FaCirclePlay className={styles.play} size={80} onClick={() => seturl("/video.mp4")}/>

                            <img src='https://cdn.pixabay.com/photo/2016/11/29/07/10/hand-1868015_960_720.jpg' alt='video3'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.watchPopup} ${url == "" ? null : styles.active}`}>
                {url == "" ? null : <div className={styles.player}>
                    <TfiClose size={35} className={styles.close} onClick={() => seturl("")}/>
                    <video src={url} controls></video>
                </div>}
            </div>
        </>);
};
export default React.memo(VideosSection);
