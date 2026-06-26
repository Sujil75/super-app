import { useStore } from '../../store/useStore'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'
import NewsWidget from '../../components/NewsWidget/NewsWidget'
import NotesWidget from '../../components/NotesWidget/NotesWidget'
import TimerWidget from '../../components/TimerWidget/TimerWidget'
import './Dashboard.css'

function Dashboard() {
  const getUser = useStore(state => state.user)
  const getCategory = useStore(state => state.categories)

  return (
    <section className="dashboard-container">
        <div className='dashboard-main-container'>
          <div className='dashboard-content-container'>
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

            <div className='dashboard-notes-container'>
              <NotesWidget />
            </div>
          </div>

          <div className='timer-dashboard-container'>
            <TimerWidget />
          </div>
        </div>

        <div className='news-dashboard-container'>
          <NewsWidget />
        </div>
    </section>
  )
}

export default Dashboard