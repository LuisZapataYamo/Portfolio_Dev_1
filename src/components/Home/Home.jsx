import './Home.css'

import logoHomeSvg from '../../assets/img/svg/logohome.svg'
import perfilPNG from '../../assets/img/png/perfil_1.png'
import untelsPNG from '../../assets/img/png/untels-logo.png'
import valhallaPNG from '../../assets/img/png/valhalla.png'
import pyaPNG from '../../assets/img/png/pya.png'

import { ReactComponent as LinkedinSvg } from '../../assets/img/svg/linkedin-logo.svg'
import { ReactComponent as GithubSvg } from '../../assets/img/svg/github-logo.svg'
import SphereContent from '../SphereContent/SphereContent.jsx'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'

const Home = () => {
  const handleClick = (event, id) => {
    event.preventDefault()
    setTimeout(() => {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <div className="main">
      <div className="header-home">
        <div className="content">
          <img src={logoHomeSvg} alt="logo-home"/>
          <ul className="navbar-home">
            <li><a href="#about" onClick={(event) => handleClick(event, 'about')}>Sobre mi</a></li>
            <li><a href="#worked" onClick={(event) => handleClick(event, 'worked')}>Experiencia</a></li>
            <li><a href="#education" onClick={(event) => handleClick(event, 'education')}>Educación</a></li>
            <li><Link to="/blog/" className="button-blog">Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="main-home">
        <div className="content-front-page">
          <div className="front-page">
            <div>
              <div className="text-content">
                <p className="hello">Hola, me llamo</p>
                <h1 className="name-title">Luis Zapata</h1>
                <p className="introduction">Soy bachiller en ingenieria de sistemas y desarrollador back-end
                  continuamente estoy creando productos digitales que contentan
                  una buena experiencia y sean de utilidad para las personas
                </p>
              </div>
              <ul className="list-buttoms">
                <li>
                  <a href="https://www.linkedin.com/in/luiszapatayamodev/" rel="noopener noreferrer" target="_blank">
                    <LinkedinSvg className="icon"/>
                    <span className="button-social">Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/LuisZapataYamo" rel="noopener noreferrer" target="_blank">
                    <GithubSvg className="icon"/>
                    <span className="button-social">GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <div className="content-about">
            <div className="content-text">
              <h2>Sobre mi</h2>
              <p>Bachiller de ingeniería de sistemas con interés en el aprendizaje continuo y el desarrollo personal y
                profesional. Apasionado por la naturaleza y motivado por contribuir positivamente a la comunidad a
                través de la tecnología. Enfocado en adquirir nuevos conocimientos sobre las TIC y en aplicarlos para
                construir soluciones sostenibles y orientadas a un mejor futuro.
              </p>
            </div>
            <picture>
              <img src={perfilPNG} alt=""/>
            </picture>
          </div>
          <div className="skills" id="skills">
            <SphereContent
              lista={['Python', 'Django', 'Django REST', 'HTML', 'CSS', 'Git', 'PostgreSQL', 'Three.js', 'Java', 'C++', 'Selenium', 'Pandas', 'Figma', 'JavaScript']}
              color="#F3F2EF"
            />
            <div className="content-text">
              <h2>Habilidades</h2>
              <p>Cuento con experiencia en el desarrollo de aplicaciones web escalables y en la optimización de procesos
                mediante pruebas automatizadas. También he trabajado en el análisis y manipulación de datos, lo que me
                permite extraer información útil de grandes volúmenes de datos y desarrollar interfaces web funcionales
                y atractivas. Además, tengo experiencia en el trabajo colaborativo en proyectos de software, siguiendo
                buenas prácticas de control de versiones.
              </p>
            </div>
          </div>
        </div>
        <div className="worked" id="worked">
          <h2>Experiencia</h2>
          <div className="work pya">
            <div className="text-work">
              <h3>Desarrollador de Software
                <span>@
                  <a
                    href="https://www.pya.cl/" target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paréz&Alvarez
                  </a>
                </span>
              </h3>
              <h4>Ener. 2024 - Dic 2024</h4>
              <p>Encargado de resolver problemas de usuarios y brindar soporte técnico para sistemas internos,
                asegurando su correcto funcionamiento. Experiencia en el mantenimiento y optimización de sistemas legacy
                mediante la implementación de buenas prácticas de programación, así como en la migración de módulos
                antiguos hacia una arquitectura moderna basada en microservicios. Participación activa en la corrección
                y mejora de funcionalidades utilizando tecnologías como Spring Boot, WebFlux y Angular
              </p>
              <div className="features">
                <span>Aptitudes:</span>
                <ul className="tags">
                  <li>#Java</li>
                  <li>#Spring Boot</li>
                  <li>#Spring Web Flux</li>
                  <li>#Microsoft Azure</li>
                  <li>#Airflow</li>
                  <li>#Jenkins</li>
                  <li>#PostgreSQL</li>
                  <li>#Angular</li>
                  <li>#Linux</li>
                  <li>#Python</li>
                </ul>
              </div>
            </div>
            <div className="logo">
              <img src={pyaPNG} alt=""/>
            </div>
          </div>
          <div className="work">
            <div className="text-work">
              <h3>Desarrollador de Back-End / Soporte Tecnico
                <span>@
                  <a
                    href="https://valhalla.com.pe/" target="_blank"
                    rel="noopener noreferrer"
                  >Valhalla
                  </a>
                </span>
              </h3>
              <h4>Sept. 2022 - Ener. 2024</h4>
              <p>Responsable de resolver errores y desarrollar nuevas APIs para Zeia Smart Wellness, asegurando el uso
                de buenas prácticas. Participé en la migración del sistema a AWS, incluyendo la configuración de
                dominios y subdominios. Optimizé bases de datos utilizando Amazon Aurora Postgres e integré nuevos
                modelos de datos. Además, desarrollé tareas asíncronas para el monitoreo de dispositivos y la gestión de
                notificaciones, colaboré en la creación de componentes con React y documenté las APIs implementadas.
              </p>
              <div className="features">
                <span>Aptitudes:</span>
                <ul className="tags">
                  <li>#AWS</li>
                  <li>#PostgreSQL</li>
                  <li>#Java</li>
                  <li>#Sprint Boot</li>
                  <li>#Python</li>
                  <li>#Django REST framework</li>
                  <li>#Celery</li>
                  <li>#React.js</li>
                  <li>#Shopify</li>
                </ul>
              </div>
            </div>
            <div className="logo">
              <img src={valhallaPNG} alt=""/>
            </div>
          </div>
        </div>
        <div className="education" id="education">
          <h2>Educacion</h2>
          <div className="study">
            <div className="text-study">
              <h3>Universidad Nacional Tecnologica de Lima Sur</h3>
              <p>Estudios en Ingenieria de Sistemas | 2019 - 2024</p>
            </div>
            <div className="logo">
              <img src={untelsPNG} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
