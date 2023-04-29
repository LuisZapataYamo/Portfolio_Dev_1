import "./ArticleCard.css"

import { Link } from 'react-router-dom'
import converTimeToLima from '../../../utils/parsers.jsx'

const ArticleCard = ({ post }) => {
  return (
    <div className="article">
      <span>{converTimeToLima(post.created_at)}</span>
      <Link to={`/blog/article/${post.id}`}><h2>{post.title}</h2></Link>
      <ul className="tags">
        {post.tag_list.map((tag, index) => (
          <li key={index} className="tag">#{tag}</li>
        ))}
      </ul>
      <p>{post.description}</p>
    </div>
  )
}

export default ArticleCard