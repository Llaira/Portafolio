import './Projects.css'
import Tuoportunidad from '../Images/img-onu.png'
import Socialnetwork from '../Images/img-patiperros.png'
import Cardvalidation from '../Images/img-card-validation.png'
import Datalovers from '../Images/img-data-lovers.png'

const Projects = () => {
    return (
       <div className="projects-container" id="projects">
          <h2 className="projects-title">Proyectos</h2>
          <section className="project-container-onu">
              <div>
                 <img src={Tuoportunidad} className="project-onu-photo" alt="tu oportunidad" id="onu-photo" />
              </div>
              <div className="project-description">
                 <h3 className="project-name">TU OPORTUNIDAD</h3>
                 <p>Plataforma creada para mantener la comunicación entre las estudiantes y egresadas de "Tu Oportunidad" de ONU Mujeres. 
                    En la aplicación se puede interactuar, crear grupos, enviar mensajes y subir información entre cada usuaria. <br></br><br></br>
                 <span className="project-tools">Herramientas utilizadas: Javascript Vanilla - HTML5 - CSS3 - Firebase.<br></br>
                                                *Sólo vista mobile*</span>
                 </p>
                 <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-Proyecto-Onu-Mujeres" target="_blank">
                 <button className="project-demo-button">DEMO</button>
                 </a>
                 <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-Proyecto-Onu-Mujeres" target="_blank">
                    <button className="project-github-button">GITHUB</button>
                 </a>
              </div>
          </section>
          <section className="project-container-data-lovers">
              <div>
                  <img src={Datalovers} className="project-data-photo" alt="data-lovers" />
              </div>
              <div className="project-description">
                  <h3 className="project-name">DATA LOVERS</h3>
                  <p>Plataforma web del Juego League of Legends que permite filtrar y ordenar los campeones. 
                     Indicando sus características y rol dentro del juego. Además se puede ver la imagen de cada uno.  <br></br><br></br>
                  <span className="project-tools">Herramientas utilizadas:HTML5 - CSS3 - Javascript Vanilla - manipulación de data.</span>
                  </p>
                  <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-Proyecto-Onu-Mujeres" target="_blank">
                     <button className="project-demo-button">DEMO</button>
                  </a>
                  <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-data-lovers" target="_blank">
                     <button className="project-github-button">GITHUB</button>
                  </a>
              </div>
          </section>
          <section className="project-container-social-network">
              <div>
                 <img src={Socialnetwork} className="project-patiperros-photo" alt="social network" />
              </div>
              <div className="project-description">
                  <h3 className="project-name">Social Network</h3>
                  <p>Plataforma web con vista mobile, que permite compartir imágenes, comentarios y tips de viajes. 
                     Ideal para los amantes de los viajes, donde pueden interactuar entre ellos.<br></br><br></br>
                  <span className="project-tools">Herramientas utilizadas: HTML5 - CSS3 - Javascript - Firebase. *Responsive*</span>
                  </p>
                  <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-Proyecto-Onu-Mujeres" target="_blank">
                     <button className="project-demo-button">DEMO</button>
                  </a>
                  <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-social-network" target="_blank" >
                     <button className="project-github-button">GITHUB</button>
                  </a>
              </div>
           </section>
          <section className="project-container-cd">
              <div>
                 <img src={Cardvalidation} className="project-card-validation-photo" alt="card validation" />
              </div>
              <div className="project-description">
                 <h3 className="project-name">CARD VALIDATION</h3>
                 <p>Plataforma web que permite verificar si un número de tarjeta es válido o inválido, evitando fraudes y estafas.<br></br><br></br>
                 <span className="the-project-tools">Herramientas utilizadas: HTML5 - CSS3 - Javascript Vanilla.</span>
                 </p>
                 <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-Proyecto-Onu-Mujeres" target="_blank">
                    <button className="project-demo-button">DEMO</button>
                 </a>
                 <a rel="noopener noreferrer" href="https://github.com/Llaira/SCL015-card-validation" target="_blank">
                    <button className="project-github-button">GITHUB</button>
                 </a>
              </div>
           </section>
       </div>
 )
}

export default Projects;