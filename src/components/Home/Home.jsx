import gradPhoto from '../../assets/img/graduationphotocropped.jpg';
import './Home.css';

function Home(){
    return(
    <section id="home">
        {/* <h5 >Hello, I am</h5> */}
        <h1 className='helloHeader'>Harvey Ji</h1>
        <h6>Software Engineer and Developer</h6>
        <div className="gradphotoContainer">
            <img src={gradPhoto} className='gradphoto'/>
        </div>
        <h3>Welcome to my portfolio</h3>
    </section>
    );
}

export default Home;