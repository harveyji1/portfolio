/* eslint-disable react/no-unescaped-entities */
import chiefsShirt from "../../assets/img/chiefsPFP.jpg";
import "./AboutMe.css";
import Carousel from 'react-bootstrap/Carousel';
import ATO from "../../assets/img/ATO.jpg";
import ggGolf from "../../assets/img/ggGolf.jpg";
import milanDuomo from "../../assets/img/milanDuomo.jpg";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";


function AboutMe(){
    return(
    <div id="aboutme">
        <div className="aboutmeHeader">
            <h1>About Me</h1>
        </div>
        <div className="aboutmeBody">
            <Carousel
             nextIcon={<RiArrowRightWideFill className="controlIcon"/>}
             prevIcon={<RiArrowLeftWideFill className="controlIcon"/>}
             >
                <Carousel.Item interval={7500}>
                    <img src={chiefsShirt} className='aboutmePic'/>
                    <Carousel.Caption>
                        <h3>Chiefs Fan</h3>
                        <p>Born and raised in Kansas City</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7500}>
                <img src={ATO} className='aboutmePic'/>
                    <Carousel.Caption>
                    <h3>ATO Alumni</h3>
                    <p>ATO Recruitment Chair and IFC Director of Recruitment</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={7500}> 
                <img src={ggGolf} className='aboutmePic'/>
                    <Carousel.Caption>
                    <h3>Golf</h3>
                    <p>
                        I love it, but I'm terrible
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={7500}> 
                <img src={milanDuomo} className='aboutmePic'/>
                    <Carousel.Caption>
                    <h3>Traveling</h3>
                    <p>
                        I love to travel! 12 countries and counting
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>      
    </div>
    );
}

export default AboutMe;