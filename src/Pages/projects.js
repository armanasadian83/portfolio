import vistah from './../assets/vistah.ir.jpg'
import vistahShop from './../assets/shop.vistah.ir.jpg'
import nutrinext from './../assets/nutrinext.ir.png'
import ogenetech from './../assets/ogenetech.com.png'
import ogenePanel from './../assets/ogenepanel.png'
import oldVersion from './../assets/oldversion.png'
import fugen from './../assets/fugen.com.png'
import newVersion from './../assets/newVersion.png'
import { FaCode } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa";

const Project = () => {
    return (
        <>
        
        <div className="container">
            <div className="projectPage">
                
                <div className="d-flex align-items-center header">
                    <h1 className="blueColored">پروژه ها</h1>
                    
                    <span className="me-auto">2023-2025</span>
                </div>

                <div className='projectBox'>
                    <div className="row projectItems">

                    <div className="col-12 col-md-4">
                        <div className="item text-center noMarginTop">
                            <a href='https://vistah.ir' target='_blank'><img src={vistah} className='w-100' /></a>
                            <h4><FaWordpressSimple />&nbsp;وبسایت شرکتی ویستا | 2023</h4>
                            <p className='text-muted'>وبسایت وردپرسی برای شرکت ویستا الکترونیک هوشمند</p>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <div className="item text-center">
                            <a href='https://shop.vistah.ir' target='_blank'><img src={vistahShop} className='w-100' /></a>
                            <h4><FaWordpressSimple />&nbsp;وبسایت فروشگاهی ویستا | 2024</h4>
                            <p className='text-muted'>وبسایت وردپرسی و فروشگاهی برای شرکت ویستا الکترونیک هوشمند</p>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <div className="item text-center">
                            <a href='https://nutrinext.ir' target='_blank'><img src={nutrinext} className='w-100' /></a>
                            <h4><FaCode />&nbsp;وبسایت نوترینکست | 2025</h4>
                            <p className='text-muted'>طراحی اختصاصی وبسایت برای استارتاپ نوترینکست</p>
                        </div>
                    </div>
                </div>

                <div className="row projectItems">

                    <div className="col-12 col-md-4">
                        <div className="item text-center">
                            <a href='https://ogenetech.com'><img src={ogenetech} className='w-100' /></a>
                            <h4><FaCode />&nbsp;وبسایت فروشگاهی اوژن | 2025</h4>
                            <p className='text-muted'>طراحی اختصاصی و فول استک وبسایت برای آموزشگاه اوژن</p>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <div className="item text-center">
                            <a href='https://github.com/armanasadian83/ogeneAdminPanel' target='_blank'><img src={ogenePanel} className='w-100' /></a>
                            <h4><FaCode />&nbsp;پنل مدیریت وبسایت اوژن | 2025</h4>
                            <p className='text-muted'>توسعه بک اند و پنل مدیریت وبسایت آموزشگاه اوژن</p>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <div className="item text-center">
                            <a href='https://github.com/armanasadian83' target='_blank'><img src={oldVersion} className='w-100' /></a>
                            <h4><FaCode />&nbsp;وبسایت شخصی نسخه قدیمی | 2024</h4>
                            <p className='text-muted'>طراحی اختصاصی وبسایت شخصی</p>
                        </div>
                    </div>
                </div>

                <div className="row projectItems">

                    <div className="col-12 col-md-4">
                        <div className="item text-center">
                            <a><img src={fugen} className='w-100' /></a>
                            <h4><FaCode />&nbsp;وبسایت رسمی فیوژن | بزودی</h4>
                            <p className='text-muted'>طراحی اختصاصی وبسایت برای استارتاپ فیوژن</p>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <div className="item text-center">
                            <a href='/'><img src={newVersion} className='w-100' /></a>
                            <h4><FaCode />&nbsp;وبسایت شخصی | 2025</h4>
                            <p className='text-muted'>طراحی اختصاصی وبسایت شخصی</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Project;