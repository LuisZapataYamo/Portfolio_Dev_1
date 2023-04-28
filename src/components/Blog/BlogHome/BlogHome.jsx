import './BlogHome.css'

import { ReactComponent as DevtoSVG } from '../../../assets/img/svg/dev-icon.svg'
import { ReactComponent as TwitterSVG } from '../../../assets/img/svg/twitter-icon.svg'
import { useEffect, useState } from 'react'
import ArticleCard from '../ArticleCard/ArticleCard.jsx'

const BlogHome = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dev.to/api/articles?username=luiszapatayamo')
      const data = await response.json()
      setPosts(data)
    }

    fetchData()
  }, [])

  return (
    <div className="main-blog">
      <div className="banner">
        <div className="contet-banner">
          <div className="content-text">
            <h1>Bienvenido a ResistenceDev</h1>
            <p>Este es un blog personal, comparto articulos sobre desarrollo web asi como noticias sobre
              tecnología.</p>
            <ul>
              <li><DevtoSVG className="icon devto"/>Dev.to</li>
              <li><TwitterSVG className="icon"/>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="list-articles">
        {posts?.map(post => (
          <ArticleCard post={post}/>
        ))}
      </div>
    </div>
  )
}

export default BlogHome