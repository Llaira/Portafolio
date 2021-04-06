import './Skills.css'
import icons from '../Images/icons-skills-1.png'
import certificate from '../Images/scrum-certificate.pdf'
import logoCertiprof from '../Images/logo-certiprof.png'
// import iconsmobile from '../images/icons-skills-mobile.png'

const Skills = () => {
    return (
       <section className="skills-content" id="skills">
          <div classname="skills-tittle-content">
             <h2 className="skills-title">Herramientas</h2>
          </div>
          <div>
             <img src={icons} className="skills-icons" alt="my icons" />
          </div>
          <div classname="certificate-content">
             <h2 className="certificate-title">Certificado</h2>
          </div>
          <div className="logo-button-content">
            <img src={logoCertiprof} className="logo-certiprof" alt="certificate" />
            <a href= {certificate} target="_blank">
                <button className="certificate-button">Scrum Fundation Proffesional Certificate </button>
            </a>
          </div>
       </section>

 )
}

export default Skills;