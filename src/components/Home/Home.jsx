import gradPhoto from '../../assets/img/graduationphotocropped.jpg';
import './Home.css';

function Home(){
    return(
    <section id="home">
        <h5 className='helloHeader'>Hello, I am</h5>
        <h1>Harvey Ji</h1>
        <h6>Software QA Engineer and Developer</h6>
        <div className="gradphotoContainer">
            <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h3>Welcome to my portfolio</h3>
    </section>
    );
}

export default Home;