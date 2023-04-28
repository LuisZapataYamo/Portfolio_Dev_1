import './HeaderBlog.css'

import { ReactComponent as LogoSVG } from '../../../assets/img/svg/logoblog.svg'
import { ReactComponent as ArrowLeftSVG } from '../../../assets/img/svg/arrow-left.svg'
import { ReactComponent as SearchSVG } from '../../../assets/img/svg/search-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const HeaderBlog = () => {
  const navigate = useNavigate()
  const [contentInput, setContentInput] = useState('')

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(`/blog/articles/?q=${contentInput}`);
      navigate(`/blog/articles?q=${contentInput}`);
    }
  }

  useEffect(() => {
    const i = document.querySelector('div.search > i')
    if (contentInput !== '') {
      i.classList.add('hide');
    }
    else{
      i.classList.remove('hide');
    }
  })

  return (
    <div className="header-blog">
      <div className="content">
        <div className="content-img">
          <Link onClick={() => navigate(-1)}>
            <ArrowLeftSVG id="return-home"/>
          </Link>
          <LogoSVG className="logo-blog"/>
        </div>
        <div className="search">
          <input type="text" placeholder="" onChange={(e) => setContentInput(e.target.value)} onKeyPress={handleKeyPress}/>
          <i></i>
          <SearchSVG className="icon-search"/>
        </div>
      </div>
    </div>
  )
}

export default HeaderBlog