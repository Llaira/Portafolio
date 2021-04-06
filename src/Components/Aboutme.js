import './Aboutme.css'
import LlairaReyesCv from '../Images/Llaira-Reyes-cv.pdf'
import Grupo from '../Images/grupo-adulto.jpg'
import Actividades from '../Images/actividades-recreativas.jpg'


const Aboutme = () => {
    return (
       <section className="aboutme-container" id="aboutme">
           <div className="aboutme-title-container">
             <h2 className="aboutme-title">Sobre mí</h2>
           </div>
           <div className="aboutme-paragraph-container">
             <p className="aboutme-paragraph">                  
                Soy Desarrolladora Web (Front-End Developer) y estudiante de UX/UI Designer. 
                Amante de la tecnología, el diseño y la programación. 
                Soy una mujer arriesgada,  me gusta a sumir nuevos desafios y ponerme a prueba para enfrentar 
                los distintos escenarios.
                Es por eso que he experimentado en el autoaprendizaje realizando un Bootcamp para convertirme en desarrolladora web.
                <br></br>Las expriencias vividas me han formado como una mujer independiente, segura, empática y organizada. 
                Anteriormente me he desempeñado como terapeuta, instructora, coordinadora y couch. 
                Siempre entregando lo mejor de mí en cada desafio.<br></br>
                Actualmente emprendí con venta de terrarios de suculentas y cactus de las cuales soy una coleccionista, 
                donde descubrí mi lado más creativo. Desde el diseño de los terrarios, el logo de mi página y flyers. 
                Todo diseñado por mí. El nombre de mi emprendimiento es "Jardín Munay" y puedes conocerlo 
                <a rel="noopener noreferrer" href="https://www.instagram.com/jardin_munay/" target="_blank">
                <button className="instagram">aquí</button>
                </a>
             </p>
               <div className="images">
               <img src={Grupo} className="img-gruop" alt="my img" />
               <img src={Actividades} className="img-activities" alt="my img" />
               </div>
                <a href= {LlairaReyesCv} target="_blank">
                <button className="aboutme-cv-button">MI CV</button>
                </a>
             
            </div>
       </section>
    )
}

export default Aboutme;