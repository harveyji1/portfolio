import gradPhoto from '../../assets/img/graduationphotocropped.jpg';
import './Home.css';

function Home(){
    return(
    <div id="home">
        <h5>Hello, I am</h5>
        <div>
            <img src={gradPhoto} className='gradphoto'/>
        </div>

        <h1>Harvey Ji</h1>
        <h3>Welcome to my portfolio</h3>
    </div>
    );
}

export default Home;