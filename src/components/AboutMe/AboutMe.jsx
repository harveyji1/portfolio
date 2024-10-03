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
            <p> My name is Harvey Ji. I am a Computer Science Graduate from the University of Kansas. Thank you for visiting my website!</p>
        </div>
        
    </div>
    );
}

export default AboutMe;