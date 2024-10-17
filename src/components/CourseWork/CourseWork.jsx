/* eslint-disable react/no-unescaped-entities */
import "./CourseWork.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

function CourseWork(){
    return(
    <section id="coursework">
        <div className="courseWorkHeader">
            <h1>Course Work</h1>
        </div>
        <div className="courseWorkBody">
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
            <Tab eventKey="computer-science" title="Computer Science">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Course Abbreviation</th>
                        <th>Class Name</th>
                        <th>Professor</th>
                        <th>Skills Learned</th>
                        <th>My Personal Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>EECS 168</td>
                            <td>Programming I</td>
                            <td>John Gibbons</td>
                            <td>Syntax of C++, Basic Coding</td>
                            <td>9.3/10</td>
                        </tr>
                        <tr>
                            <td>EECS 210</td>
                            <td>Discrete Structures</td>
                            <td>Matthew Moore</td>
                            <td>"How to Think Like a Programmer"</td>
                            <td>8.5/10</td>
                        </tr>
                        <tr>
                            <td>EECS 268</td>
                            <td>Programming II</td>
                            <td>John Gibbons</td>
                            <td>Advanced Programming Concepts</td>
                            <td>9.7/10</td>
                        </tr>
                        <tr>
                            <td>EECS 330</td>
                            <td>Data Structures and Algorithms</td>
                            <td>Cuncong Zhong</td>
                            <td>Basic Data Structures, a few Algorithms</td>
                            <td>7.2/10</td>
                        </tr>
                        <tr>
                            <td>EECS 368</td>
                            <td>Programming Language Paradigms</td>
                            <td>David Johnson</td>
                            <td>JavaScript and Haskell</td>
                            <td>8.0/10</td>
                        </tr>
                        <tr>
                            <td>EECS 447</td>
                            <td>Introduction to Database Systems</td>
                            <td>Bo Luo</td>
                            <td>Database Basics and SQL</td>
                            <td>9.8/10</td>
                        </tr>
                        <tr>
                            <td>EECS 448</td>
                            <td>Software Engineering I</td>
                            <td>Hossein Saiedian</td>
                            <td>Software Engineering Basics</td>
                            <td>9.1/10</td>
                        </tr>
                        <tr>
                            <td>EECS 581</td>
                            <td>Software Engineering II</td>
                            <td>David Johnson</td>
                            <td>Advanced Software Engineering and Capstone</td>
                            <td>9.5/10</td>
                        </tr>
                        <tr>
                            <td>EECS 630</td>
                            <td>Advanced Data Structures and Algorithms</td>
                            <td>Cuncong Zhong</td>
                            <td>Advanced Algorithms, Touch up on Data Structures</td>
                            <td>7.1/10</td>
                        </tr>
                        <tr>
                            <td>EECS 665</td>
                            <td>Compiler Construction</td>
                            <td>Drew Davidson</td>
                            <td>Making Your Own Compiler</td>
                            <td>9.9/10</td>
                        </tr>
                        <tr>
                            <td>EECS 678</td>
                            <td>Introduction to Operating Systems</td>
                            <td>Heechul Yun</td>
                            <td>OS Basics</td>
                            <td>7.3/10</td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="business" title="Business">
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Course Abbreviation</th>
                        <th>Class Name</th>
                        <th>Professor</th>
                        <th>Skills Learned</th>
                        <th>My Personal Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ECON 142</td>
                            <td>Principles of Microeconomics</td>
                            <td>Jo Lugovskyy</td>
                            <td>Demand x Supply</td>
                            <td>6.3/10</td>
                        </tr>
                        <tr>
                            <td>ACT 200</td>
                            <td>Fundamentals of Financial Accounting</td>
                            <td>Alee Phillips</td>
                            <td>Accounting Basics</td>
                            <td>7.5/10</td>
                        </tr>
                        <tr>
                            <td>IST 205</td>
                            <td>Survey of Information Systems</td>
                            <td>Brian Salmans</td>
                            <td>Honestly, Not Much</td>
                            <td>5.0/10</td>
                        </tr>
                        <tr>
                            <td>MKTG  305</td>
                            <td>Survey of Marketing</td>
                            <td>Liz Benditt</td>
                            <td>Marketing Basics</td>
                            <td>7.3/10</td>
                        </tr>
                        <tr>
                            <td>MGMT 305</td>
                            <td>Survey of Management and Leadership</td>
                            <td>Cynthia Steutermann</td>
                            <td>"Be a Leader, Not a Boss"</td>
                            <td>6.0/10</td>
                        </tr>
                        <tr>
                            <td>SCM 305</td>
                            <td>Survey of Decision Making in Business</td>
                            <td>Joseph Walden</td>
                            <td>Business Choices</td>
                            <td>6.1/10</td>
                        </tr>
                        <tr>
                            <td>FIN 305 448</td>
                            <td>Finance and Accounting</td>
                            <td>Kurt Krogull</td>
                            <td>Financial Statements, Budgeting, and Cost Analysis</td>
                            <td>8.5/10</td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="core-classes" title="Core Classes">
                <Table>
                    <thead>
                        <tr>
                        <th>Course Abbreviation</th>
                        <th>Class Name</th>
                        <th>Professor</th>
                        <th>Skills Learned</th>
                        <th>My Personal Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MATH 126</td>
                            <td>Calculus II</td>
                            <td>Sarah Browne</td>
                            <td>Integration Techniques, Sequences, and Seriess</td>
                            <td>6.3/10</td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="honors-others" title="Honors and Grad Classes">
            <Table>
                    <thead>
                        <tr>
                        <th>Course Abbreviation</th>
                        <th>Class Name</th>
                        <th>Professor</th>
                        <th>Skills Learned</th>
                        <th>My Personal Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HNRS 190</td>
                            <td>Stick To Sports: Politics and Sport</td>
                            <td>Mauricio Gomez Montoya</td>
                            <td>Sociopolitical Issues and Influence</td>
                            <td>6.4/10</td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
        </Tabs>
        </div>
    </section>
    )
}

export default CourseWork;