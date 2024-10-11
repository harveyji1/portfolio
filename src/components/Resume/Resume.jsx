import "./Resume.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";

function Resume(){
    return(
        <div id="resume">
            <div className="resumeHeader">
                <h1>Resume</h1>
            </div>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body className="educationBody">
            <div className="universityInfo">
                <Card className="resume-card" bg={'secondary'}>
                    <Card.Header>
                        August 2024 - May 2024
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>University of Kansas</Card.Title>
                        <Card.Text>
                            Bachelors of Science
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="majorInfo">
            <Card className="resume-card">
            <Card.Body>
                <Card.Title>Computer Science Major</Card.Title>
                <Card.Text>
                    School of Engineering
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>4.0 School GPA</ListGroup.Item>
            </ListGroup>
            </Card>
            <Card className="resume-card">
            <Card.Body>
                <Card.Title>Business Minor</Card.Title>
                <Card.Text>
                    School of Business
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>4.0 School GPA</ListGroup.Item>
            </ListGroup>
            </Card>
            <Card className="resume-card">
                    <Card.Body>
                        <Card.Title>Honors Program</Card.Title>
                        <Card.Text>Graduated with Highest Distinction</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                            <ListGroup.Item>4.0 Overall GPA</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Work Experience</Accordion.Header>
          <Accordion.Body>
          <Card className="resume-card">
            <Card.Header>August 2024 - Present</Card.Header>
            <Card.Body>
                <Card.Title>Software QA Engineer</Card.Title>
                <Card.Text>
                    BASYS Processing
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Cypress and Playwright Automation</ListGroup.Item>
                <ListGroup.Item>Jira and Github for Version Control</ListGroup.Item>

            </ListGroup>
        </Card>
        <Card className="resume-card">
            <Card.Header>May 2023 - January 2024</Card.Header>
            <Card.Body>
                <Card.Title>Software Engineering Intern III</Card.Title>
                <Card.Text>
                    Kansas City National Security Campus
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Full Stack Developer</ListGroup.Item>
                <ListGroup.Item>React TypeScript and C#</ListGroup.Item>
            </ListGroup>
        </Card>
        <Card className="resume-card">
            <Card.Header>May 2022 - August 2022</Card.Header>
            <Card.Body>
                <Card.Title>Dynamics Intern</Card.Title>
                <Card.Text>
                    UltraSource LLC
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Automation for Business Processes</ListGroup.Item>
                <ListGroup.Item>Microsoft Power Automate and Power Apps</ListGroup.Item>
            </ListGroup>
        </Card>
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Leadership Experience</Accordion.Header>
          <Accordion.Body>
    <Card className="resume-card">
        <Card.Header>January 2023 - Decemeber 2023</Card.Header>
            <Card.Body>
                <Card.Title>Director of Recruitment</Card.Title>
                <Card.Text>
                    Interfraternity Council
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Directed recruitment across the university </ListGroup.Item>
                <ListGroup.Item>Lead meetings with lasting effect on Greek Life</ListGroup.Item>
            </ListGroup>
    </Card>
    <Card className="resume-card">
            <Card.Header>January 2022 - May 2022</Card.Header>
            <Card.Body>
                <Card.Title>Undergraduate Teaching Fellow</Card.Title>
                <Card.Text>
                    University of Kansas
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Introduction to Digital Logic Design</ListGroup.Item>
                <ListGroup.Item>Answered questions and conducted office hours</ListGroup.Item>
            </ListGroup>
    </Card>
    <Card className="resume-card">
        <Card.Header>January 2022 - December 2022</Card.Header>
            <Card.Body>
                <Card.Title>Executive Board: Recruitment Chair</Card.Title>
                <Card.Text>
                    Alpha Tau Omega Fraternity
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Conducted recruitment events and votings</ListGroup.Item>
                <ListGroup.Item>Oversaw weekly chapter meetings</ListGroup.Item>
            </ListGroup>
    </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    );
}

export default Resume;