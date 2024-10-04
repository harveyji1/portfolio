/* eslint-disable react/no-unescaped-entities */
import "./Resume.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Resume(){
    return(
        <div id="resume">
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
          <Card className="resume-card">
            <Card.Body>
                <Card.Title>Computer Science Major</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
         </Card>
         <Card className="resume-card">
            <Card.Body>
                <Card.Title>Business Minor</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
         </Card>
         <Card className="resume-card">
            <Card.Body>
                <Card.Title>Honors Program</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
         </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Work Experience</Accordion.Header>
          <Accordion.Body>
          <Card className="resume-card">
            <Card.Body>
                <Card.Title>Software QA Engineer</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="resume-card">
            <Card.Body>
                <Card.Title>Software Engineering Intern</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="resume-card">
            <Card.Body>
                <Card.Title>Dynamics Intern</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Leadership Experience</Accordion.Header>
          <Accordion.Body>
          <Card className="resume-card">
            <Card.Body>
                <Card.Title>Undergraduate Teaching Fellow</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
    </Card>
    <Card className="resume-card">
            <Card.Body>
                <Card.Title>Director of Recruitment</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
    </Card>
    <Card className="resume-card">
            <Card.Body>
                <Card.Title>Recruitment Chairmen</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
    </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    );
}

export default Resume;