import { useEffect, useState } from 'react'

import { getWeather, getUserLocation } from '../../services/weatherApi'
import { weatherIcon, icons } from '../../data/icons'
import './WeatherWidget.css'

function WeatherWidget() {
    const [weather, setWeather] = useState(null)
    const [time, setTime] = useState(new Date())

    const {CloudsIcon, WindIcon} = weatherIcon
    const {Thermometer, DropletIcon} = icons
    const today = new Date()

    useEffect(() => {
        async function handleWeather() {
            try {
                const { lat, lon } = await getUserLocation()
                const data = await getWeather(lat, lon)
                setWeather(data)
            } catch (error) {
                console.error("Failed to fetch weather:", error)
            }
        }

        const time = setInterval(() => {
            setTime(new Date())
        }, 1000)

        if (weather === null) {
            handleWeather()
        }

        const weatherTimer = setTimeout(() => {
            handleWeather()
        }, 60 * 1000)

        return () => {
            clearInterval(time) 
            clearTimeout(weatherTimer)
        }
    }, [weather])

    return (
        <section className='weather-widget-section'>
            <div className='date-time-section'>
                <h1>
                    {`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`}
                </h1>

                <h1>
                    {time.toLocaleTimeString("en-US", {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </h1>
            </div>

            <div className='weather-container'>
                <div className='weather-details-container'>
                    <CloudsIcon size={60} />

                    <p>{weather?.weather?.[0]?.main || "Loading..."}</p>
                </div>

                <hr />

                <div className='weather-details-container'>
                    <h1>{weather?.main?.temp != null ? `${Math.ceil(weather?.main?.temp)}°C` : "Loading..."}</h1>
                    
                    <div>
                        <Thermometer size={30} />
                        <p>1010 mbar <br /> Pressure</p>
                    </div>
                </div>

                <hr />

                <div className='weather-details-container'>
                    <div className='weather-remaining-details-container'>
                        <WindIcon size={20} />
                        <p>{weather?.wind?.speed || "Loading..."} km/h <br /> Wind</p>
                    </div>
                    
                    <div className='weather-remaining-details-container'>
                        <DropletIcon size={20} />
                        <p>{weather?.main?.humidity || "Loading..."}% <br /> Humidity</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherWidget