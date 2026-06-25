import { useEffect, useState } from 'react'
import { newsApi } from '../../services/newsApi'
import './NewsWidget.css'

function NewsWidget() {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    const handleNews = async () => {
      try {
        const data = await newsApi()
        setNewsData(data)
      } catch(err) {
        console.log("Failed to fetch news", err.message)
      }
    }

    handleNews()
  }, [])
  console.log(newsData)

  return (
    <section className='news-widget-container'>
      <ul>
        {newsData.map(news => (
          <li 
            key={news?.id} 
            style={{"background-image": `url(${news?.image})`, "background-size": "auto"}}
          >
            <div className='news-headline-container'>
              <h3>{news?.title || "Loading..."}</h3>

              <p>{news?.publish_date || "Loading..."}</p>
            </div>

            <div className='description-container'>
              <p>{news?.text.slice(0, 550)} <span>Read More...</span></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NewsWidget