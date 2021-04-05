import './Home.css'
import photo from '../Images/photo.png'

const Home = () => {
   return (
     <div className="home-page-container">
        <div className="home-page">
           <img src={photo} className="home-page-photo" alt="llaira" />
        </div>

     </div>
   )
}

export default Home;