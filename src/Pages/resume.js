import Maxim from "./../assets/maxim.png"
import Vistah from "./../assets/vistah.png"
import Fugen from "./../assets/fugen.jpg"

import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { PiHandshakeFill } from "react-icons/pi";
import { useState } from "react";
import { Button } from "@mui/material";

import { Chart } from "react-google-charts";

import { TfiClose } from "react-icons/tfi";
import { CgCheck } from "react-icons/cg";
import { IoIosLink } from "react-icons/io";

const Resume = () => {

    const [dialogWidth, setDialogWidth] = useState('xl');
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [vistahModalOpen, setVistahModalOpen] = useState(false);
    const [fugenModalOpen, setFugenModalOpen] = useState(false);

    const handleOpenSearchModal = () => {
        setSearchModalOpen(true);
    }

    const handleOpenVistahModal = () => {
        setVistahModalOpen(true);
    }

    const handleOpenFugenModal = () => {
        setFugenModalOpen(true);
    }

    const handleCloseOpenSearchModal = () => {
        setSearchModalOpen(false);
        setVistahModalOpen(false);
        setFugenModalOpen(false);
    }

    return (
        <>
        <div className="container">
            <div className="resumePage">

                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="blueColored">مهندس کامپیوتر- کارشناسی</h1>
                        <h5>فنی مهندسی تهران جنوب <b className="me-3">1401</b> - الان</h5>


                        <h3 className="blueColored pt-3 mt-4">درباره خودم</h3>
                        <p className="bio">
                            سال‌هاست که ساختن تجربه‌های کاربری جذاب، سریع و استاندارد برای من نه فقط یک کار، بلکه یک هیجان روزانه است.
                            <br />
                            در مسیر حرفه‌ای خودم همیشه دنبال یادگیری، رشد و همکاری با آدم‌های متخصص بوده‌ام؛ افرادی که مثل من به کیفیت اهمیت می‌دهند و می‌خواهند کاری بسازند که ارزش واقعی خلق کند.
                            همین اشتیاق باعث شد استارتاپ خودم را راه‌اندازی کنم؛ جایی که به دنبال ساختن پروژه‌های بزرگ، خلاقانه و اثرگذار هستیم.

                            اگر شما هم مثل من به ساختن آینده‌ی وب باور دارید و دوست دارید کنار کسی کار کنید که با انرژی، نظم و تعهد جلو می‌رود، مطمئنم همکاری‌مان می‌تواند نتیجه‌های بزرگی به همراه داشته باشد.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 skillBox">
                        <h3 className="blueColored">تخصص</h3>
                        <div className="d-flex align-items-center">
                            <p className="mb-0">React JS</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">HTML</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "100%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">CSS</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "100%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">Bootstrap</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "100%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">Javascript</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "70%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">Node JS</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "50%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">Express</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "50%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">Mongo DB</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">SQL</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="mb-0">#C</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "30%" }}></div>
                            </div>
                        </div>
                        <br />

                        <hr />

                        <br />
                        
                        <div className="d-flex align-items-center">
                            <p className="mb-0">English</p>

                            <div className="progress w-75" role="progressbar" aria-label="Animated striped example"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "100%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-5">
                    <h3 className="blueColored"><PiHandshakeFill /> &nbsp;تجربه کاری</h3>
                    <div className="col-12 col-md-8 d-flex align-items-center flex-wrap jobItems">

                        <div className="job" onClick={handleOpenSearchModal}>
                            <div className="text-center">
                                <img src={Maxim} />
                                <p>تاکسی اینترنتی ماکسیم</p>
                                <span>کارشناسی امور مشتریان (CRS)</span>
                            </div>
                        </div>

                        <div className="job" onClick={handleOpenVistahModal}>
                            <div className="text-center">
                                <img src={Vistah} />
                                <p>ویستا الکترونیک هوشمند</p>
                                <span>طراح و پشتیبان سایت</span>
                            </div>
                        </div>

                        <div className="job" onClick={handleOpenFugenModal}>
                            <div className="text-center">
                                <img src={Fugen} />
                                <p>فیوژن</p>
                                <span>بنیان گذاری و توسعه</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div className="modalWrapper">
            <Dialog open={searchModalOpen} onClose={handleCloseOpenSearchModal} maxWidth={dialogWidth}
                PaperProps={{
                    sx: {
                        width: "900px",
                        maxWidth: "900px",
                        maxHeight: "1000px"
                    }
                }}>
                <DialogContent sx={{ 
                    direction: 'ltr',
                    '& *': { direction: 'rtl' }, 
                    maxHeight: '80vh', 
                    overflowY: 'auto',
                    background: 'linear-gradient(180deg, #f4f5fdff 0%, #e8ebff 100%)',
                    '&::-webkit-scrollbar': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#2e59d7',
                      borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      backgroundColor: '#555',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#e0e0e0',
                      borderRadius: '10px',
                    },
                 }}>
                    <div className="jobCardInfo py-3">
                       <div className="row p-2">
                            <div className="col-12 col-md-6 text-center">
                                <img src={Maxim} />
                            </div>
                            <div className="col-12 col-md-6">
                                <h3 className="blueColored">تاکسی اینترنتی ماکسیم</h3>

                                <ul className="pt-3 list-unstyled">
                                    <li><CgCheck />&nbsp;CRS و کارشناسی تبلیغات</li>
                                    <li><CgCheck />&nbsp;کار با پایگاه داده رابطه ای و Data Entry</li>
                                    <li><CgCheck />&nbsp;کار با اتوماسیون</li>
                                    <li><CgCheck />&nbsp;کارشناسی و بهینه سازی امور مشتریان</li>
                                    <li><CgCheck />&nbsp;بررسی و رفع اشکالات فنی سیستم و سامانه</li>
                                </ul>

                                <p className="text-muted date">
                                    از مرداد <b>1403</b> تا آذر <b>1403</b>
                                </p>
                            </div>
                            <p className="text-muted">
                                در دوران فعالیت خود، علاوه بر انجام امور ارتباط با مشتری، مهارت‌های دیتا اینتری و کارشناسی تبلیغات میدانی را نیز فرا گرفتم. همچنین با کار در یک محیط سازمانی، کار با اتوماسیون اداری و یک دیتابیس رابطه‌ای را آموختم و توانستم فرآیندهای ثبت، مدیریت و تحلیل داده‌ها را با دقت و سرعت بیشتری انجام دهم. این تجربیات به من کمک کرد تا در حوزه‌های عملیاتی، داده‌محور و ارتباطی عملکرد مؤثرتری داشته باشم.
                            </p>
                       </div>
                       <div className="borderCheck">
                            <TfiClose onClick={handleCloseOpenSearchModal} />
                       </div>
                    </div>
                    
                </DialogContent>
            </Dialog>
        </div>

        <div className="modalWrapper">
            <Dialog open={vistahModalOpen} onClose={handleCloseOpenSearchModal} maxWidth={dialogWidth}
                PaperProps={{
                    sx: {
                        width: "900px",
                        maxWidth: "900px",
                        maxHeight: "1000px"
                    }
                }}>
                <DialogContent sx={{ 
                    direction: 'ltr',
                    '& *': { direction: 'rtl' }, 
                    maxHeight: '80vh', 
                    overflowY: 'auto',
                    background: 'linear-gradient(180deg, #f4f5fdff 0%, #e8ebff 100%)',
                    '&::-webkit-scrollbar': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#2e59d7',
                      borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      backgroundColor: '#555',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#e0e0e0',
                      borderRadius: '10px',
                    },
                 }}>
                    <div className="jobCardInfo py-3">
                       <div className="row p-2">
                            <div className="col-12 col-md-6 text-center">
                                <img src={Vistah} />
                            </div>
                            <div className="col-12 col-md-6">
                                <h3 className="blueColored">ویستا الکترونیک هوشمند</h3>

                                <ul className="pt-3 list-unstyled">
                                    <li><CgCheck />&nbsp;توسعه وبسایت، پشتیبانی، سئو</li>
                                    <li><CgCheck />&nbsp;IT و پشتیبانی شبکه</li>
                                </ul>

                                <p className="text-muted date">
                                    از بهمن <b>1402</b> تا مرداد <b>1403</b>
                                </p>
                            </div>
                            <p className="text-muted">
                               در شرکت ویستا الکترونیک هوشمند به‌عنوان توسعه‌دهنده وب فعالیت داشتم و مسئولیت طراحی، توسعه و به‌روزرسانی وب‌سایت‌های شرکتی و فروشگاهی مجموعه را بر عهده داشتم. علاوه بر توسعه، وظایف پشتیبانی فنی، سئو (SEO) و بهینه‌سازی وب‌سایت‌ها را نیز انجام می‌دادم تا عملکرد و دیده‌شدن آنلاین مجموعه بهبود یابد. همچنین مدیریت پشتیبانی شبکه و امور فنی شرکت از جمله نگهداری سیستم‌ها، رفع مشکلات شبکه و تضمین عملکرد صحیح زیرساخت‌های IT را بر عهده داشتم.
                            </p>
                            <div className="d-flex align-items-center px-5 pb-3 siteBox">
                                <div className="px-2">
                                    <a href="https://vistah.ir" target="_blank">
                                        <IoIosLink /> وبسایت شرکتی
                                    </a>
                                </div>

                                <div className="px-2">
                                    <a href="https://shop.vistah.ir" target="_blank">
                                        <IoIosLink /> وبسایت فروشگاهی
                                    </a>
                                </div>
                            </div>
                       </div>
                       <div className="borderCheck">
                            <TfiClose onClick={handleCloseOpenSearchModal} />
                       </div>
                    </div>
                    
                </DialogContent>
            </Dialog>
        </div>

        <div className="modalWrapper">
            <Dialog open={fugenModalOpen} onClose={handleCloseOpenSearchModal} maxWidth={dialogWidth}
                PaperProps={{
                    sx: {
                        width: "900px",
                        maxWidth: "900px",
                        maxHeight: "1000px"
                    }
                }}>
                <DialogContent sx={{ 
                    direction: 'ltr',
                    '& *': { direction: 'rtl' }, 
                    maxHeight: '80vh', 
                    overflowY: 'auto',
                    background: 'linear-gradient(180deg, #f4f5fdff 0%, #e8ebff 100%)',
                    '&::-webkit-scrollbar': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#2e59d7',
                      borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      backgroundColor: '#555',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#e0e0e0',
                      borderRadius: '10px',
                    },
                 }}>
                    <div className="jobCardInfo py-3">
                       <div className="row p-2">
                            <div className="col-12 col-md-6 text-center">
                                <img className="fugen" src={Fugen} />
                            </div>
                            <div className="col-12 col-md-6">
                                <h3 className="blueColored">فیوژن</h3>

                                <ul className="pt-3 list-unstyled">
                                    <li><CgCheck />&nbsp;توسعه و نوآوری در حوزه برنامه نویسی</li>
                                    <li><CgCheck />&nbsp;توسعه وبسایت و اتوماسیون برای سازمان ها و شرکت ها</li>
                                    <li><CgCheck />&nbsp;ساخت اپلیکیشن برای اندروید و IOS</li>
                                    <li><CgCheck />&nbsp;جذب افراد متخصص و کارآمد</li>
                                </ul>

                                <p className="text-muted date">
                                    از بهمن 1403
                                </p>
                            </div>
                            <p className="text-muted">
                                فیوژن یک استارتاپ جوان و خلاق در حوزه توسعه وب است که با تمرکز بر طراحی و پیاده‌سازی وب‌سایت‌های شرکتی و فروشگاهی فعالیت می‌کند. هدف ما ارائه راهکارهای حرفه‌ای، سریع و استاندارد برای حضور مؤثر کسب‌وکارها در فضای دیجیتال است.

در فیوژن، تلاش می‌کنیم با گردهم‌آوردن متخصصان باتجربه و علاقه‌مند، خدماتی نوآورانه ارائه دهیم و مسیر رشد و گسترش ایده‌های بزرگ را هموار کنیم. چشم‌انداز ما تبدیل‌شدن به یک تیم قدرتمند در حوزه فناوری و ارائه راهکارهای جامع آنلاین برای شرکت‌ها و سازمان‌هاست.
                            </p>
                       </div>
                       <div className="borderCheck">
                            <TfiClose onClick={handleCloseOpenSearchModal} />
                       </div>
                    </div>
                    
                </DialogContent>
            </Dialog>
        </div>
        </>
    );
}
 
export default Resume;