import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
    return (
        <>
        <div className="container">
            <div className="aboutMePage">
                <div className="header text-center">
                    <h1 className="blueColored">ارتباط با من</h1>
                    <h6 className="text-muted">بیاید باهم همکاری کنیم</h6>
                </div>

                <div className="row contactBox">
                    <div className=" col-12 col-md-3 item text-center">
                        <a href="tel:09228372654">
                            <i><FiPhoneCall /></i>
                            <h4>شماره تماس</h4>
                            <h6 className="text-muted">09228372654</h6>
                        </a>
                    </div>

                    <div className=" col-12 col-md-3 item text-center">
                        <a href="mailto:armanasadian4@email.com">
                            <i><FaRegEnvelope /></i>
                            <h4>آدرس ایمیل</h4>
                            <h6 className="text-muted">armanasadian4@gmail.com</h6>
                        </a>
                    </div>

                    <div className=" col-12 col-md-3 item text-center">
                        <a target="_blank" href="https://t.me/armi320">
                            <i><FaTelegram className="telegram" /></i>
                            <h4>تلگرام</h4>
                            <h6 className="text-muted">@Armi320</h6>
                        </a>
                    </div>

                    <div className=" col-12 col-md-3 item text-center">
                        <a href="https://www.linkedin.com/in/arman-asadian-b0b1582b4/" target="_blank">
                            <i><FaLinkedin className="linkedin" /></i>
                            <h4>لینکدین</h4>
                            <h6 className="text-muted">arman-asadian-b0b1582b4</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default AboutMe;