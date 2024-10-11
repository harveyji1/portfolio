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
                <h2>Development</h2>
                <div className="skillsContent">
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>React</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>TypeScript</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article>
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h4>C++</h4>
                        </div>
                    </article>

                </div>
            </div>
            <div className="skillsCard">
                <h2>Automation</h2>
                <div className="skillsContent">

                </div>
            </div>
            <div className="skillsCard">
                <h2>Miscellaneous</h2>
                <div className="skillsContent">

                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;