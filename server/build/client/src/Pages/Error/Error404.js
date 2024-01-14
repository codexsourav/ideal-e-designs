import { Link } from 'react-router-dom';
import styles from './styles/style404.module.css';
import React from 'react';
function Error404() {
    return (<div className={styles.notfoundWapper}>
            <div className={styles.notfound}>
                <div className={styles.notfound404} data-aos="fade-up">
                    <h1>404</h1>
                    <h2 data-aos="fade-left">Page not found</h2>
                </div>
                <Link to="/" data-aos="fade-up">Report</Link>
                <Link to="/" data-aos="fade-up">Homepage</Link>
            </div>
        </div>);
}
export default React.memo(Error404);
