import Button from '@mui/material/Button';
import MyImg from './../assets/myImgHd.png';
import { FaRegCircle } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

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
        
        <FaRegCircle className='circleOverlay' />
        <div className="container homePage">
            <div className="row">
                
                <div className="col-12 col-md-6 mobileTextAlign">
                    <div className="overlap"></div>
                    <div className="overlapTwo"></div>

                    <div className="imgWrapper fade-in">
                        <img src={MyImg} />
                    </div>
                </div>

                <div className='col-12 col-md-6 my-3 info mobileTextAlign fade-in'>
                    <p className='blueColored'>سلام، من</p>
                    <h1>آرمان اسدیان</h1>
                    <p className='blueColored'>هستم.</p>

                    <Link to='/me'>
                        <Button>طراح و توسعه حوزه وب</Button>
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
 
export default Home;