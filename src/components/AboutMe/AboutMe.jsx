/* eslint-disable react/no-unescaped-entities */
import chiefsShirt from "../../assets/img/chiefsPFP.jpg"
import "./AboutMe.css";

function AboutMe(){
    return(
    <div id="aboutme">
        <div className="pictureContainer">
            <img src={chiefsShirt} className='chiefsShirt'/>
        </div>

        <div className="textContainer">
            <h1>About Me</h1>
            <p> Hi there! I'm Harvey Ji, a Computer Science Graduate, Software QA Engineer, and Software Developer. Thank you for visiting my website!</p>
        </div>
        
    </div>
    );
}

export default AboutMe;