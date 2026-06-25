import { useStore } from '../../store/useStore'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'
import NewsWidget from '../../components/NewsWidget/NewsWidget'
import './Dashboard.css'

function Dashboard() {
  const getUser = useStore(state => state.user)
  const getCategory = useStore(state => state.categories)

  return (
    <section className="dashboard-container">
        <div className='user-weather-main-container'>
          <div className='user-container'>
            <img 
              src="https://res.cloudinary.com/dh1akzmfk/image/upload/v1782396878/user-img_ptfoy1.png" 
              alt='user image'
            />
            
            <div className='user-details-container'>
              <h3>{getUser.name}</h3>
              <h2>{getUser.email}</h2>
              <h1>{getUser.username}</h1>

              <ul>
                {getCategory.map(each => (
                  <li key={each.id}>
                    {each.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <WeatherWidget />
        </div>

        <NewsWidget />
    </section>
  )
}

export default Dashboard