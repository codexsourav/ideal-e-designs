import styles from './styles/Fotter.module.css';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsArrowUp } from "react-icons/bs";
import { useWindowScrollPositions } from '../../Hooks/useWindowScrollPositions';
import { Link } from 'react-router-dom';

function Footer() {
    const { scrollY } = useWindowScrollPositions();
    return (
        <>
            <div className={`${styles.fotter}`} >
                <div className="container">
                    <br />
                    <div className={`${styles.fotterTitle}`} >
                        <img src='/logo.png' width={200} alt='Fotter Logo' className={styles.fotterTitle} />
                    </div>

                    <ul className={styles.quicklink} >
                        <li>
                            <a href="/support">Life-Time Support</a>
                        </li>
                        <li>
                            <a href="/termsofservice">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/privacypolicy">Disclaimer & Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                    <div className={styles.socailIcons} >
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><RiInstagramFill /></a>
                        <a href="#"><FaSquareXTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                    <div className={styles.contact}>
                        <a href="mailto:info@idealedesigns.com">info@idealedesigns.com</a>
                        <a href="tel:+91 9315509430">+91 9315509430</a>
                    </div>
                    <div className={styles.fotterLinks} >
                        <ul>
                            <li className={styles.title}>Mobile Development</li>
                            <li><Link to="/tech/reactnative">React Native Development</Link></li>
                            <li><Link to="/tech/flutter">Flutter App Development</Link></li>
                            <li><Link to="/tech/nativeandroid">Native Android Development</Link></li>
                            <li><Link to="/tech/nativeios">Native iOS Development</Link></li>
                        </ul>
                        <ul>
                            <li className={styles.title}>Web Development</li>
                            <li><Link to="/tech/reactjs">React Development</Link></li>
                            <li><Link to="/tech/nodejs">Node.js Development</Link></li>
                            <li><Link to="/tech/php">PHP Development</Link></li>
                            <li><Link to="/tech/python">Python Development</Link></li>
                        </ul>
                        <ul>
                            <li className={styles.title}>Ecommerce Development</li>
                            <li><Link to="/tech/magento">Magento Development</Link></li>
                            <li><Link to="/tech/woocommerce">WooCommerce Development</Link></li>
                            <li><Link to="/tech/shopify">Shopify Development</Link></li>
                        </ul>
                        <ul>
                            <li className={styles.title}>Our Company</li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Why Choose Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <p className={styles.fotterText}>© {new Date().getFullYear()} Ideal e Designs Technologies Pvt Ltd, All Rights Reserved. </p>
                </div>
            </div>
            <a href='#' className={`${styles.goUp} ${scrollY > 400 ? styles.action : null}`} ><BsArrowUp /></a>
        </>
    )
}
export default Footer;