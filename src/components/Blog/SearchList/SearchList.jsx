import "./SearchList.css"

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ArticleCard from '../ArticleCard/ArticleCard.jsx'

const SearchList = () => {
  const search = new URLSearchParams(useLocation().search).get('q')
  const [posts, setPosts] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dev.to/api/articles?username=luiszapatayamo')
      let data = await response.json()
      if (search !== null && search !== '') {
        data = data.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
      }
      setPosts(data)
    }

    fetchData()
  }, [])

  return (
    <div className="main-list">
      {posts?.map(post => (
        <ArticleCard post={post}/>
      ))}
    </div>
  )
}

export default SearchList