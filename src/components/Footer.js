import footStyles from "../styles/footer.module.css";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    return (
        <div className={footStyles.footer}>
            <div className={footStyles.logo}>&copy;DevConnect {thisYear}</div>
            <div className={footStyles.footerLinks}>
                <a href='/about'>About</a>
                <span>Contact us :</span>
                <a href='https://www.google.com'><FiMail /></a>
                <a href='https://www.facebook.com'><FaFacebookF /></a>
                <a href='https://www.linkedIn.com'><FaLinkedinIn /></a>
            </div>
        </div>
    )
}

export default Footer