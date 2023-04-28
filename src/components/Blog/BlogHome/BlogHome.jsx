import './BlogHome.css'

import { ReactComponent as DevtoSVG } from '../../../assets/img/svg/dev-icon.svg'
import { ReactComponent as TwitterSVG } from '../../../assets/img/svg/twitter-icon.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogHome = () => {
  const [posts, setPosts] = useState([])

  const converTimeToLima = (timestamp) => {
    const date = new Date(timestamp)
    const options = { timeZone: 'America/Lima', month: 'short', day: 'numeric', year: 'numeric'}
    const [day, month, year] = (new Intl.DateTimeFormat("es-ES", options).format(date)).split(" ")
    return `${month.charAt(0).toUpperCase()+month.slice(1)} ${day} del ${year}`
  }


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
            <p>Este es un blog personal, comparto articulos sobre desarrollo web, asi como noticias sobre
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
          <div key={post.id} className="article">
            <span>{converTimeToLima(post.created_at)}</span>
            <Link to={`/blog/article/${post.id}`}><h2>{post.title}</h2></Link>
            <ul className="tags">
              {post.tag_list.map((tag, index) => (
                <li key={index} className="tag">#{tag}</li>
              ))}
            </ul>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogHome