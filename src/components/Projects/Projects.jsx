import './Projects.css';
import darkMoon from "../../assets/img/ADarkMoon.jpg";
import cookItSaved from "../../assets/img/CookItSaved.jpg";
import cookItHome from "../../assets/img/CookItHome.jpg";
import cookItPost from "../../assets/img/CookItPost.jpg";
import jinoSki from "../../assets/img/JinoSkiResort.jpg";
import Button from 'react-bootstrap/Button';

function Projects(){
    const cookItButton = () => {
        window.location.href = 'https://github.com/harveyji1/KUCapstone23';
    };
    const skiResortButton = () => {
    window.location.href = 'https://github.com/harveyji1/EECS447FinalProject';
    };
    const darkMoonButton = () => {
    window.location.href = 'https://github.com/harveyji1/A-Dark-Moon';
    };
    return(
    <div id="projects">
        <div className="projectsHeaderContainer">
            <h1>Projects</h1>
        </div>
        <div className="projectsBodyContainer">
            <div className="projectCard">
                <div className = "cookItImgs">
                    <img src={cookItHome} className='projectImg'/>
                    <img src={cookItSaved} className='projectImg'/>
                    <img src={cookItPost} className='projectImg'/>
                </div>
                <h2 className="projectTitle">Cook-It</h2>
                <div className="projectContent">
                    <h4 className='projectInfo'>React Native, TypeScript</h4>
                    <Button className='projectLink' onClick={cookItButton}>GitHub</Button>
                </div>
            </div>
            <div className="projectCard">
                    <img src={jinoSki} className='projectImg'/>
                <h2 className="projectTitle">Jino Ski Resort</h2>
                <div className="projectContent">
                    <h4 className='projectInfo'>PHP, HTML, SQL, CSS</h4>
                    <Button className='projectLink' onClick={skiResortButton}>GitHub</Button>
                </div>
            </div>
            <div className="projectCard">
                <div>
                    <img src={darkMoon} className='projectImg'/>
                </div>
                <h2 className="projectTitle">A Dark Moon</h2>
                <div className="projectContent">                    
                    <h4 className='projectInfo' onClick={darkMoonButton}>JavaScript, HTML, Github</h4>
                    <Button className='projectLink'>GitHub</Button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;