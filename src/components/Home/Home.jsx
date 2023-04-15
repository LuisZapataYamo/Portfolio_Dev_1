import './Home.css'

import logoHomeSvg from '../../assets/img/svg/logohome.svg'
import cubeGif from '../../assets/img/cube3d.gif'
import { ReactComponent as LinkedinSvg } from '../../assets/img/svg/linkedin-logo.svg'
import { ReactComponent as GithubSvg } from '../../assets/img/svg/github-logo.svg'
import { useEffect } from 'react'

const Home = () => {
  return (
    <>
      <div className="header-home">
        <img src={logoHomeSvg} alt="logo-home"/>
        <ul className="navbar-home">
          <li>Sobre mi</li>
          <li>Educación</li>
          <li>Experiencia</li>
          <li className="button-blog">Blog</li>
        </ul>
      </div>
      <div className="main-home">
        <div className="front-page">
          <div>
            <div className="text-content">
              <p className="hello">Hola, me llamo</p>
              <h1 className="name-title">Luis Zapata</h1>
              <p className="introduction">Soy estudiante de ingenieria de sistemas y desarrollador back-end
                continuamente estoy creando productos digitales para que contentan
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
    </>
  )
}

export default Home