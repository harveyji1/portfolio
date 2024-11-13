import './Projects.css';
import darkMoon from "../../assets/img/ADarkMoon.jpg";
import cookItSaved from "../../assets/img/CookItSaved.jpg";
import cookItHome from "../../assets/img/CookItHome.jpg";
import cookItPost from "../../assets/img/CookItPost.jpg";
import jinoSki from "../../assets/img/JinoSkiResort.jpg";


function Projects(){
    return(
    <div id="projects">
        <div className="projectsHeaderContainer">
            <h1>Projects</h1>
        </div>
        <div className="projectsBodyContainer">
            <div className="projectCard">
                <div>
                    <img src={cookItHome} className='projectImg'/>
                    <img src={cookItSaved} className='projectImg'/>
                    <img src={cookItPost} className='projectImg'/>
                    
                </div>
                <h2 className="projectTitle">Cook-It</h2>
                <div className="projectContent">

                    <article>
                        <div>
                            <h4>React Native</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="projectCard">
                    <div>
                        <img src={jinoSki} className='projectImg'/>
                    </div>
                <h2 className="projectCard">Jino Ski Resort</h2>
                <div className="projectContent">

                    
                    <article>
                        <div>
                            <h4>PHP</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="projectCard">
                <div>
                    <img src={darkMoon} className='projectImg'/>
                </div>
                <h2 className="projectCard">A Dark Moon</h2>
                <div className="projectContent">
                    
                    <article>
                        <div>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;