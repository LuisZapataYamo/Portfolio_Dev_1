import './Article.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkExternalLinks from 'remark-external-links'
import CodeBlockRenderer from '../../CodeBlockRenderer/CodeBlockRenderer.jsx'
import convertTimeToLima from '../../../utils/parsers.jsx'

const Article = () => {
  const [post, setPost] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dev.to/api/articles/${id}`)
      const data = await response.json()
      setPost(data)
    }
    fetchData()
  }, [])

  return (
    <div className="main-article">
      <div className="post-info">
        <div className="user-img">
          <img src={post?.user.profile_image_90} alt=""/>
        </div>
        <div className="info-text">
          <span className="username">{post?.user.name}</span>
          <span className="date">Publicado: {convertTimeToLima(post?.created_at)}</span>
        </div>
      </div>
      <h1 className="title">{post?.title}</h1>

      <ReactMarkdown
        children={post?.body_markdown}
        components={{ code: CodeBlockRenderer }}
        remarkPlugins={[remarkExternalLinks]}
      />
    </div>
  )
}

export default Article