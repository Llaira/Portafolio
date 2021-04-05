// import './Projects.css'
// import tuoportunidad from '../images/tuoportunidad.svg'
// import socialnetwork from '../images/socialnetwork.svg'
// import datalovers from '../images/datalovers.svg'
// import caesarcipher from '../images/caesarcipher.svg'
// import onuphoto from '../images/onuphoto.svg'

const Projects = () => {
    return (
       <div className="projects-container" id="projects">
          <h2 className="projects-title">Proyectos</h2>
          <section className="the-project-container-onu">
              <div>
                 <img src={tuoportunidad} className="project-onu-photo" alt="tu oportunidad" />
              </div>
              <div className="project-description">
                 <h3 className="the-project-name">TU OPORTUNIDAD</h3>
                 <p>Plataforma exclusiva de vista mobile que permite la comunicación de las participantes del programa "Tu Oportunidad" de ONU mujeres.<br></br><br></br>
                 <span className="the-project-tools">Desarrollada con HTML5, CSS3, Vanilla Javascript y Firebase.<br></br>
                                                     *Solo mobile view - Usuario: catalina@gmail.com y Contraseña: usuaria</span>
                 </p>
                 <a rel="noopener noreferrer" href="https://catalinafgh.github.io/Tu-oportunidad-ONU-Mujeres/src/" target="_blank">
                 <button className="project-demo-button">DEMO</button>
                 </a>
                 <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/Tu-oportunidad-ONU-Mujeres" target="_blank">
                    <button className="project-github-button">GITHUB</button>
                 </a>
              </div>
          </section>
          <section className="onu-presentation-container">
              <h2>Presentación a ONU Mujeres</h2>
              <img src={onuphoto} className="onu-photo" alt="presentación onu" />
              <h3>Laboratoria y UN WOMEN | Marzo – 2021</h3>
              <a rel="noopener noreferrer" href="https://hub.laboratoria.la/de-laboratoria-a-la-onu" target="_blank">
                 <button className="onu-article-button">VER ARTÍCULO</button>
              </a>
              <p className="onu-presentation-description">Tuve la oportunidad de presentar formalmente este proyecto al equipo de ONU mujeres de Nueva York y Ginebra,
                                                          expresando todo en inglés, mostré las principales funcionalidades de la app que desarrollamos con mi equipo.
                                                          Todo esto fue gracias al trabajo realizado en conjunto de Front-End y UX Designer.
                                                          Fue un desafío que afrontamos con mucha emoción, ya que la experiencia y el aprendizaje fue muy valioso.
              </p>
          </section>
          <section className="the-project-container-white">
              <div>
                  <img src={socialnetwork} className="project-beautytips-photo" alt="beauty tips" />
              </div>
              <div className="project-description">
                  <h3 className="the-project-name">SOCIAL NETWORK</h3>
                  <p>Plataforma web SPA con vista mobile y temática de maquillaje.<br></br><br></br>
                  <span className="the-project-tools">Desarrollada con HTML5, CSS3, Vanilla Javascript y Firebase.</span>
                  </p>
                  <a rel="noopener noreferrer" href="https://catalinafgh.github.io/SCL015-social-network/src/" target="_blank">
                     <button className="project-demo-button">DEMO</button>
                  </a>
                  <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/SCL015-social-network" target="_blank">
                     <button className="project-github-button">GITHUB</button>
                  </a>
              </div>
          </section>
          <section className="the-project-container-pink">
              <div>
                 <img src={datalovers} className="project-rickymorty-photo" alt="rick y morty" />
              </div>
              <div className="project-description">
                  <h3 className="the-project-name">DATA LOVERS</h3>
                  <p>Plataforma web con vista mobile tipo enciclopedia de la serie "Rick and Morty". Permite filtrar y ordenar la data.<br></br><br></br>
                  <span className="the-project-tools">Desarrollada con HTML5, CSS3 y Vanilla Javascript.</span>
                  </p>
                  <a rel="noopener noreferrer" href="https://catalinafgh.github.io/SCL015-data-lovers/src/" target="_blank">
                     <button className="project-demo-button">DEMO</button>
                  </a>
                  <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/SCL015-data-lovers" target="_blank" >
                     <button className="project-github-button">GITHUB</button>
                  </a>
              </div>
           </section>
          <section className="the-project-container-white">
              <div>
                 <img src={caesarcipher} className="project-cifradocesar-photo" alt="cifrado cesar" />
              </div>
              <div className="project-description">
                 <h3 className="the-project-name">CAESAR CIPHER</h3>
                 <p>Plataforma web que permite cifrar y descrifrar texto con el método de cifrado césar.<br></br><br></br>
                 <span className="the-project-tools">Desarrollada con HTML5, CSS3 y Vanilla Javascript.</span>
                 </p>
                 <a rel="noopener noreferrer" href="https://catalinafgh.github.io/SCL015-cipher/src/" target="_blank">
                    <button className="project-demo-button">DEMO</button>
                 </a>
                 <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/SCL015-cipher" target="_blank">
                    <button className="project-github-button">GITHUB</button>
                 </a>
              </div>
           </section>
       </div>
 )
}

export default Projects;