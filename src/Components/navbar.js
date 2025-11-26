import { IoIosMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import {Link, useLocation} from "react-router-dom"
import { useState } from "react";

import { MdHome } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {

    const location = useLocation();
    
    const getActive = (path) => location.pathname === path ? "blueColored" : ""

    const getActiveMobile = (path) => location.pathname === path ? "boldIcon" : ""

    return (
        <>
        
        <div className="container">
            <div className="myNavbar d-flex align-items-center pt-4 pb-3">
                
                <Link to='/' style={{color: '#2b2a2aff'}}>
                    <h3>آرمان اسدیان</h3>
                </Link>

                <div className="me-auto navbarItems d-flex align-items-center">
                    
                    <Link to='/cv'>
                        <h6 className={getActive("/cv")}>رزومه</h6>
                    </Link>

                    <Link to='/projects'>
                         <h6 className={getActive("/projects")}>پروژه</h6>
                    </Link>

                    <Link to='/aboutme'>
                        <h6 className={getActive("/aboutme")}>ارتباط با من</h6>
                    </Link>

                    <div className="iconWrapper">
                        <a href="mailto:armanasadian4@email.com">
                            <IoIosMail />
                        </a>
                    </div>

                    <div className="iconWrapper">
                        <a href="tel:09228372654">
                            <FaPhoneFlip />
                        </a>
                    </div>

                </div>

            </div>

            <hr className="hr" />
        </div>

        <div className="mobileNavbar w-100 fade-in">
            <div className="row">
                <div className="col-3 d-flex align-items-center justify-content-center home">
                    <Link to='/'><MdHome className={getActiveMobile("/")} /></Link>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center cv">
                    <Link to='/cv'><FaUserLarge className={getActiveMobile("/cv")} /></Link>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center project">
                    <Link to='/projects'><FaCode className={getActiveMobile("/projects")} /></Link>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center aboutme">
                    <Link to='/aboutme'><FaPhoneVolume className={getActiveMobile("/aboutme")} /></Link>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;