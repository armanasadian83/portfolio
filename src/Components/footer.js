import { useLocation } from "react-router-dom";

const Footer = () => {

    const { pathname } = useLocation();

    if (pathname === "/") return null;
    if(pathname === "/me") return null;
    return (
        <>
        <div className="footer w-100">
            <div className="d-flex align-items-center w-100">
                <span>Copyright 2025</span>
                <div className="line"></div>
            </div>
        </div>
        </>
    );
}
 
export default Footer;