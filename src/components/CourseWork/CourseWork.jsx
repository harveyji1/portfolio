/* eslint-disable react/no-unescaped-entities */
import "./CourseWork.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

function TableHeader() {
  return (
    <thead className = "courseWorkTableHeader">
      <tr>
        <th>Class Name</th>
        <th>Professor</th>
        <th>Skills Learned</th>
        <th>My Personal Rating</th>
      </tr>
    </thead>
  );
}

const courses = {
  "computer-science": [
    { name: "Programming I", professor: "John Gibbons", skills: "Syntax of C++, Basic Coding", rating: "9.3/10" },
    { name: "Discrete Structures", professor: "Matthew Moore", skills: "\"How to Think Like a Programmer\"", rating: "8.5/10" },
    { name: "Programming II", professor: "John Gibbons", skills: "Advanced Programming Concepts", rating: "9.7/10" },
    { name: "Data Structures and Algorithms", professor: "Cuncong Zhong", skills: "Basic Data Structures, a few Algorithms", rating: "7.2/10" },
    { name: "Programming Language Paradigms", professor: "David Johnson", skills: "JavaScript and Haskell", rating: "8.0/10" },
    { name: "Introduction to Database Systems", professor: "Bo Luo", skills: "Database Basics and SQL", rating: "9.8/10" },
    { name: "Software Engineering I", professor: "Hossein Saiedian", skills: "Software Engineering Basics", rating: "9.1/10" },
    { name: "Software Engineering II", professor: "David Johnson", skills: "Advanced Software Engineering and Capstone", rating: "9.5/10" },
    { name: "Advanced Data Structures and Algorithms", professor: "Cuncong Zhong", skills: "Advanced Algorithms, Touch up on Data Structures", rating: "7.1/10" },
    { name: "Compiler Construction", professor: "Drew Davidson", skills: "Making Your Own Compiler", rating: "9.9/10" }
  ],
  "business": [
    { name: "Principles of Microeconomics", professor: "Jo Lugovskyy", skills: "Demand x Supply", rating: "6.3/10" },
    { name: "Fundamentals of Financial Accounting", professor: "Alee Phillips", skills: "Accounting Basics", rating: "7.5/10" },
    { name: "Survey of Information Systems", professor: "Brian Salmans", skills: "Honestly, Not Much", rating: "5.0/10" },
    { name: "Survey of Marketing", professor: "Liz Benditt", skills: "Marketing Basics", rating: "7.3/10" },
    { name: "Survey of Management and Leadership", professor: "Cynthia Steutermann", skills: "\"Be a Leader, Not a Boss\"", rating: "6.0/10" },
    { name: "Survey of Decision Making in Business", professor: "Joseph Walden", skills: "Business Choices", rating: "6.1/10" },
    { name: "Finance and Accounting", professor: "Kurt Krogull", skills: "Financial Statements, Budgeting, and Cost Analysis", rating: "8.5/10" }
  ],
  "core-classes": [
    { name: "Calculus II", professor: "Sarah Browne", skills: "Integration Techniques, Sequences, and Series", rating: "6.3/10" },
    { name: "Calculus III", professor: "Weishi Liu", skills: "Mastered Multivariable Calculus", rating: "7.7/10" },
    { name: "Physics I for Engineers", professor: "Sarah LeGresley Rush", skills: "Classical Mechanics", rating: "6.6/10" },
    { name: "Physics II for Engineers", professor: "Christopher Fischer", skills: "Electromagnetism and Thermodynamics", rating: "7.5/10" },
    { name: "Social Problems and American Values", professor: "Jarron Saint Onge", skills: "Exploring Inequality, Justice, and Policy", rating: "9.0/10" },
    { name: "Applied Mathematical Statistics", professor: "Joonha Park", skills: "Statistical Analysis and Probability", rating: "8.4/10" }
  ],
  "honors": [
    { name: "Stick To Sports: Politics and Sport", professor: "Mauricio Gomez Montoya", skills: "Sociopolitical Issues and Influence", rating: "6.4/10" },
    { name: "Intro to Digital Logic Honors", professor: "David Johnson", skills: "Boolean Algebra, Logic Gates, Circuit Design", rating: "9.7/10" },
    { name: "Speaker-Audience Communication Honors", professor: "Jack Porter", skills: "Vector Spaces, Matrices, Determinants", rating: "6.7/10" },
    { name: "Elementary Linear Algebra Honors", professor: "Mauricio Gomez Montoya", skills: "Sociopolitical Issues and Influence", rating: "6.4/10" },
    { name: "Culture and Health Honors", professor: "Kathryn Rhine", skills: "Cultural Practices and Health Outcomes", rating: "6.9/10" },
    { name: "Software Modeling and Analysis", professor: "Perry Alexander", skills: "Coq and Formal Methods", rating: "7.1/10" }
  ]
};

function CourseTable({ courses }) {
  return (
    <Table striped bordered className="courseWorkTable">
      <TableHeader />
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.name}</td>
            <td>{course.professor}</td>
            <td>{course.skills}</td>
            <td>{course.rating}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function CourseWork() {
  return (
    <section id="coursework">
      <div className="courseWorkHeader">
        <h1>Course Work</h1>
        <h5 className="favoriteClasses">Some of my Favorite Classes</h5>
      </div>
      <div className="courseWorkBody">
        <Tabs defaultActiveKey="computer-science" className="mb-0" justify>
          {Object.keys(courses).map((key) => (
            <Tab key={key} eventKey={key} title={key.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}>
              <CourseTable courses={courses[key]} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default CourseWork;