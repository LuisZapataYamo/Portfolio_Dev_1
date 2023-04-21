import './Home.css'

import logoHomeSvg from '../../assets/img/svg/logohome.svg'
import perfilPNG from '../../assets/img/png/perfil_2.png'
import untelsPNG from '../../assets/img/png/untels-logo.png'
import cubeGif from '../../assets/img/cube3d.gif'

import { ReactComponent as LinkedinSvg } from '../../assets/img/svg/linkedin-logo.svg'
import { ReactComponent as GithubSvg } from '../../assets/img/svg/github-logo.svg'
import SphereContent from '../SphereContent/SphereContent.jsx'

const Home = () => {
  return (
    <div className="main">
      <div className="header-home">
        <div className="content">
          <img src={logoHomeSvg} alt="logo-home"/>
          <ul className="navbar-home">
            <li>Sobre mi</li>
            <li>Educación</li>
            <li>Experiencia</li>
            <li className="button-blog">Blog</li>
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
                <p className="introduction">Soy estudiante de ingenieria de sistemas y desarrollador back-end
                  continuamente estoy creando productos digitales que contentan
                  una buena experiencia y sean de utilidad para las personas
                </p>
              </div>
              <ul className="list-buttoms">
                <li>
                  <LinkedinSvg className="icon"/>
                  <span className="button-social">Linkedin</span>
                </li>
                <li>
                  <GithubSvg className="icon"/>
                  <span className="button-social">GitHub</span>
                </li>
              </ul>
            </div>
            <div className="cube3d">
            </div>
          </div>
        </div>
        <div className="about">
          <div className="content-text">
            <h2>Sobre mi</h2>
            <p>Joven estudiante de ingeniería de sistemas capaz, carismático, respetuoso y productivo con ganas de
              aportar a la comunidad para así poder desarrollarse personalmente y profesionalmente. Con convicciones
              hacia un mejor futuro y ganas de adquirir más conocimientos sobre las TIC.</p>
            <p>Actualmente estoy trabajando en la creacion de un blog para que estudiante de mi universidad puedan
              compartir conocimientos.</p>
          </div>
          <img src={perfilPNG} alt=""/>
        </div>
        <div className="skills">
          <div className="content-text">
            <h2>Habilidades</h2>
            <p>Tengo experiencia en la creación de aplicaciones web escalables y robustas utilizando herramientas
              tecnológicas como Django Rest framework. Además, he utilizado Selenium para optimizar y mejorar la
              eficiencia de los procesos mediante pruebas automatizadas en la web.
            </p>
            <p>También he trabajado con Python, Pandas, HTML y CSS para el análisis y manipulación de datos, lo que me
              permite extraer información valiosa a partir de grandes conjuntos de datos y crear diseños web atractivos.
              Por último, tengo experiencia en el manejo de Git para el trabajo colaborativo en proyectos de
              software.</p>
          </div>
          <SphereContent lista={[
            'Python',
            'Django',
            'Django REST',
            'HTML',
            'CSS',
            'Git',
            'PostgreSQL',
            'Three.js',
            'Java',
            'C++',
            'Selenium',
            'Pandas',
            'Figma',
            'JavaScript'
          ]} color={'#F3F2EF'}/>
        </div>
        <div className="education">
          <h2>Educacion</h2>
          <div className="study">
            <div className="text-study">
              <h3>Universidad Nacional Tecnologica de Lima Sur</h3>
              <p>Estudios en Ingenieria de Sistemas | 2019 - Provisto a finalizar en 2023</p>
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