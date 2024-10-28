/* eslint-disable react/no-unescaped-entities */
import chiefsShirt from "../../assets/img/chiefsPFP.jpg"
import "./AboutMe.css";
//import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function AboutMe(){
    return(
    <div id="aboutme">
        <div className="aboutmeHeader">
            <h1>About Me</h1>
        </div>
        <div className="aboutmeBody">
            {/* <Carousel>
                <Carousel.Item interval={7500}>
                    <img src={chiefsShirt} className='chiefsShirt'/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7500}>
                    <img src={chiefsShirt} className='chiefsShirt'/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={7500}> 
                    <img src={chiefsShirt} className='chiefsShirt'/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        <div className="pictureContainer">
            <img src={chiefsShirt} className='chiefsShirt'/>
        </div>

        <div className="textContainer">
            <p> Hi there! I'm Harvey Ji, a Computer Science Graduate, Software QA Engineer, and Software Developer. Thank you for visiting my website!</p>
        </div>
        </div>      
    </div>
    );
}

export default AboutMe;