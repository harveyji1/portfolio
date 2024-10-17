import "./Skills.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


function Skills(){
    return(
    <div id="skills">
        <div className="headerBodyContainer">
            <h1>Skills</h1>
        </div>
        <div className="skillsBodyContainer">
            <div className="skillsCard">
                <h2>Full-Stack Development</h2>
                <div className="skillsContent">
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>React/React Native</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>TypeScript/JavaScript</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>C++</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Python</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>HTML/CSS</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>SQL</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>C#</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>.NET</h4>
                        </div>
                    </article>
                </div>
            </div>
            <div className="skillsCard">
                <h2>Automation and DevOps</h2>
                <div className="skillsContent">
                <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Cypress</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Playwright</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Microsoft Power Automate</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Miscrosoft Power App</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Jira</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>GitLab</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>GitHub</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>Expo</h4>
                        </div>
                    </article>
                </div>
            </div>
            {/* <div className="skillsCard">
                <h2>Miscellaneous</h2>
                <div className="skillsContent">

                </div>
            </div> */}
        </div>
    </div>
    );
}

export default Skills;