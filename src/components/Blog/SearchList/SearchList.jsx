import './SearchList.css'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ArticleCard from '../ArticleCard/ArticleCard.jsx'

const SearchList = () => {
  const search = useLocation().search
  const [posts, setPosts] = useState()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    const fetchData = async () => {
      const response = await fetch('https://dev.to/api/articles?username=luiszapatayamo')
      let data = await response.json()
      if (search !== null && search !== '') {
        data = data.filter((post) => post.title.toLowerCase().includes(q.toLowerCase()))
      }
      console.log()
      setPosts(data)
    }
    fetchData()
  }, [search])

  return (
    <div className="main-list">
      {posts?.map(post => (
        <ArticleCard key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default SearchList