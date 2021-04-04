import './Home.css'
import photo from '../Images/me-phone.png'

const Home = () => {
   return (
     <div className="home-page-container">
        <div className="home-page">
           <h1 className="home-page-title"> Hola soy Llaira Reyes Front-End Developer | UX/UI Designer</h1>
           <h4 className="home-page-subtitle">Si quieres conocer más de mí te invito a ver mi portafolio</h4>
           <img src={photo} className="home-page-photo" alt="llaira" />
        </div>

     </div>
   )
}

export default Home;