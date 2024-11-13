import './Projects.css';

function Projects(){
    return(
    <div id="projects">
        <div className="projectsHeaderContainer">
            <h1>Projects</h1>
        </div>
        <div className="projectsBodyContainer">
            <div className="projectCard">
                <h2 className="projectTitle">Cook-It</h2>
                <div className="projectContent">
                    <article>
                        <div>
                            <h4>React/React Native</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="projectCard">
                <h2 className="projectCard">A Dark Moon</h2>
                <div className="projectContent">
                    <article>
                        <div>
                            <h4>Cypress</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="projectCard">
                <h2 className="projectCard">My Portfolio</h2>
                <div className="projectContent">
                    <article>
                        <div>
                            <h4>Cypress</h4>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;