import { FaConnectdevelop } from "react-icons/fa";

import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { useEffect } from "react";

const WhoIsMe = () => {

    useEffect(() => {
            const updateOverflow = () => {
            if (window.innerWidth < 500) {
                document.body.style.overflowY = "auto";
            } else {
                document.body.style.overflowY = "hidden";
            }
            };
    
            updateOverflow(); // run on mount
            window.addEventListener("resize", updateOverflow);
    
            return () => {
                window.removeEventListener("resize", updateOverflow);
                document.body.style.overflowY = "auto"; // reset on unmount
            };
        }, []);

    return (
        <>
        
        <div className="container">
            <div className="whois pt-5">

                <div className="row pt-5">
                    <div className="col-12 col-md-7">
                        <h1 className="blueColored">درباره من؟</h1>
                        
                        <p>
                            سلام! من یک برنامه‌نویس وب هستم و با علاقه فراوان در زمینه طراحی و توسعه وبسایت فعالیت می‌کنم. تلاش من همیشه این است که با ترکیب خلاقیت، دقت و استفاده از تکنولوژی‌های روز، پروژه‌هایی قابل اعتماد، سریع و کارآمد ارائه دهم.
                            از طراحی رابط کاربری گرفته تا پیاده‌سازی بخش‌های فنی و توسعه سیستم‌های پیچیده، هدفم ایجاد تجربه‌ای روان و حرفه‌ای برای کاربران و مشتریان است.
                            اگر به دنبال همکاری در پروژه‌های وب یا توسعه یک محصول آنلاین هستید، خوشحال می‌شوم با شما در ارتباط باشم!
                        </p>

                        <div className="d-flex align-items-center">

                            <div className="d-flex align-items-center item ms-5">
                                <span className="mx-3 num blueColored">2+</span>
                                <span className="info">سال تجربه</span>
                            </div>

                            <div className="d-flex align-items-center item mx-5">
                                <span className="mx-3 num blueColored">10+</span>
                                <span className="info">پروژه کامل</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                        <FaConnectdevelop className="devIcon" />
                        <div className="d-flex justify-content-center leftContent">
                            <div className="skillBox">
                            <div className="d-flex align-items-center scrollTrack">
                                <div className="box">
                                    <span>HTML  &nbsp; <FaHtml5 className="html" /></span>
                                </div>
                                 <div className="box">
                                    <span>CSS  &nbsp; <FaCss3Alt className="css" /></span>
                                </div>
                                <div className="box">
                                    <span>React JS &nbsp; <RiReactjsFill className="react" /></span>
                                </div>
                                <div className="box">
                                    <span>Node js &nbsp; <FaNodeJs className="nodejs" /></span>
                                </div>
                                 <div className="box">
                                    <span>Express &nbsp; <SiExpress className="express" /></span>
                                </div>
                                <div className="box">
                                    <span>Bootstrap &nbsp; <FaBootstrap className="bootstrap"/></span>
                                </div>
                                <div className="box">
                                    <span>Mongo DB &nbsp; <DiMongodb className="mongodb"/></span>
                                </div>
                                <div className="box">
                                    <span>SQL server &nbsp; <DiMsqlServer className="sqlserver"/></span>
                                </div>
                                <div className="box">
                                    <span>MySQL &nbsp; <GrMysql className="mysql"/></span>
                                </div>
                                <div className="box">
                                    <span>#C &nbsp; <PiFileCSharpDuotone className="csharp"/></span>
                                </div>
                                <div className="box">
                                    <span>Git &nbsp; <FaGitAlt className="git"/></span>
                                </div>
                                <div className="box">
                                    <span>Github &nbsp; <FaGithub className="github"/></span>
                                </div>
                                <div className="box">
                                    <span>React Native &nbsp; <TbBrandReactNative className="reactnative"/></span>
                                </div>

                                

                                <div className="box">
                                    <span>HTML  &nbsp; <FaHtml5 className="html" /></span>
                                </div>
                                 <div className="box">
                                    <span>CSS  &nbsp; <FaCss3Alt className="css" /></span>
                                </div>
                                <div className="box">
                                    <span>React JS &nbsp; <RiReactjsFill className="react" /></span>
                                </div>
                                <div className="box">
                                    <span>Node js &nbsp; <FaNodeJs className="nodejs" /></span>
                                </div>
                                 <div className="box">
                                    <span>Express &nbsp; <SiExpress className="express" /></span>
                                </div>
                                <div className="box">
                                    <span>Bootstrap &nbsp; <FaBootstrap className="bootstrap"/></span>
                                </div>
                                <div className="box">
                                    <span>Mongo DB &nbsp; <DiMongodb className="mongodb"/></span>
                                </div>
                                <div className="box">
                                    <span>SQL server &nbsp; <DiMsqlServer className="sqlserver"/></span>
                                </div>
                                <div className="box">
                                    <span>MySQL &nbsp; <GrMysql className="mysql"/></span>
                                </div>
                                <div className="box">
                                    <span>#C &nbsp; <PiFileCSharpDuotone className="csharp"/></span>
                                </div>
                                <div className="box">
                                    <span>Git &nbsp; <FaGitAlt className="git"/></span>
                                </div>
                                <div className="box">
                                    <span>Github &nbsp; <FaGithub className="github"/></span>
                                </div>
                                <div className="box">
                                    <span>React Native &nbsp; <TbBrandReactNative className="reactnative"/></span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    );
}
 
export default WhoIsMe;