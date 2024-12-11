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
    <div className='main'>
      <div className='header-home'>
        <div className='content'>
          <img src={logoHomeSvg} alt='logo-home' />
          <ul className='navbar-home'>
            <li><a href='#about' onClick={(event) => handleClick(event, 'about')}>Sobre mi</a></li>
            <li><a href='#worked' onClick={(event) => handleClick(event, 'worked')}>Experiencia</a></li>
            <li><a href='#education' onClick={(event) => handleClick(event, 'education')}>Educación</a></li>
            <li><Link to='/blog/' className='button-blog'>Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className='main-home'>
        <div className='content-front-page'>
          <div className='front-page'>
            <div>
              <div className='text-content'>
                <p className='hello'>Hola, me llamo</p>
                <h1 className='name-title'>Luis Zapata</h1>
                <p className='introduction'>Soy estudiante de ingenieria de sistemas y desarrollador back-end
                  continuamente estoy creando productos digitales que contentan
                  una buena experiencia y sean de utilidad para las personas
                </p>
              </div>
              <ul className='list-buttoms'>
                <li>
                  <a href='https://www.linkedin.com/in/luiszapatayamodev/' rel='noopener noreferrer' target='_blank'>
                    <LinkedinSvg className='icon' />
                    <span className='button-social'>Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/LuisZapataYamo' rel='noopener noreferrer' target='_blank'>
                    <GithubSvg className='icon' />
                    <span className='button-social'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about' id='about'>
          <div className='content-about'>
            <div className='content-text'>
              <h2>Sobre mi</h2>
              <p>Joven estudiante de ingeniería de sistemas capaz, carismático, respetuoso y productivo con ganas de
                aportar a la comunidad para así poder desarrollarse personalmente y profesionalmente. Con convicciones
                hacia un mejor futuro y ganas de adquirir más conocimientos sobre las TIC.
              </p>
              <p>Actualmente estoy trabajando en la creacion de un blog para que estudiante de mi universidad puedan
                compartir conocimientos.
              </p>
            </div>
            <picture>
              <img src={perfilPNG} alt='' />
            </picture>
          </div>
          <div className='skills' id='skills'>
            <SphereContent
              lista={['Python', 'Django', 'Django REST', 'HTML', 'CSS', 'Git', 'PostgreSQL', 'Three.js', 'Java', 'C++', 'Selenium', 'Pandas', 'Figma', 'JavaScript']}
              color='#F3F2EF'
            />
            <div className='content-text'>
              <h2>Habilidades</h2>
              <p>Tengo experiencia en la creación de aplicaciones web escalables y robustas utilizando herramientas
                tecnológicas como Django Rest framework. Además, he utilizado Selenium para optimizar y mejorar la
                eficiencia de los procesos mediante pruebas automatizadas en la web.
              </p>
              <p>También he trabajado con Python, Pandas, HTML y CSS para el análisis y manipulación de datos, lo que me
                permite extraer información valiosa a partir de grandes conjuntos de datos y crear diseños web
                atractivos.
                Por último, tengo experiencia en el manejo de Git para el trabajo colaborativo en proyectos de
                software.
              </p>
            </div>
          </div>
        </div>
        <div className='worked' id='worked'>
          <h2>Experiencia</h2>
          <div className='work pya'>
            <div className='text-work'>
              <h3>Desarrollador de Software
                <span>@
                  <a
                    href='https://www.pya.cl/' target='_blank'
                    rel='noopener noreferrer'
                  >
                    Paréz&Alvarez
                  </a>
                </span>
              </h3>
              <h4>Ener. 2024 - Actualidad</h4>
              <p>Desarrollo y mantenimiento del sistema legacy, tambien migracion de modulos a sistema basado en microservicios.
              </p>
              <div className='features'>
                <span>Aptitudes:</span>
                <ul className='tags'>
                  <li>#Java</li>
                  <li>#Spring Boot</li>
                  <li>#Airflow</li>
                  <li>#Jenkins</li>
                  <li>#PostgreSQL</li>
                  <li>#Angular</li>
                  <li>#Linux</li>
                </ul>
              </div>
            </div>
            <div className='logo'>
              <img src={pyaPNG} alt='' />
            </div>
          </div>
          <div className='work'>
            <div className='text-work'>
              <h3>Desarrollador de Back-End / Soporte Tecnico
                <span>@
                  <a
                    href='https://valhalla.com.pe/' target='_blank'
                    rel='noopener noreferrer'
                  >Valhalla
                  </a>
                </span>
              </h3>
              <h4>Sept. 2022 - Ener. 2024</h4>
              <p>Desarrollo y mantenimiento del back-end del proyecto Valhalla. Soporte técnico de páginas webs usando
                WordPress y Shopify.
              </p>
              <div className='features'>
                <span>Aptitudes:</span>
                <ul className='tags'>
                  <li>#Python</li>
                  <li>#Django</li>
                  <li>#Django REST framework</li>
                  <li>#Celery</li>
                  <li>#PostgreSQL</li>
                  <li>#WordPress</li>
                  <li>#Shopify</li>
                </ul>
              </div>
            </div>
            <div className='logo'>
              <img src={valhallaPNG} alt='' />
            </div>
          </div>
        </div>
        <div className='education' id='education'>
          <h2>Educacion</h2>
          <div className='study'>
            <div className='text-study'>
              <h3>Universidad Nacional Tecnologica de Lima Sur</h3>
              <p>Estudios en Ingenieria de Sistemas | 2019 - Provisto a finalizar en 2023</p>
            </div>
            <div className='logo'>
              <img src={untelsPNG} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
