import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import "./style/Weather.component.css"
import { Action } from '../../Redux/Action'

const Weather=()=> {
    const dispatch =useDispatch()
    const [state,setState] = useState("")
    const cities = useSelector(state=>state.reducer.cities)
    const weather = useSelector(state=>state.reducer.weather)

    const apiCall=async()=>{
        dispatch(Action.getWeatherData(state))
    }

    useEffect(()=>{
        !cities?.length && dispatch(Action.getCityData('Au'))
    },[])

    useEffect(()=>{
        cities?.length && setState(cities[0].city)
    },[cities])

    useEffect(()=>{
         state && apiCall()
    },[state])

    console.log(weather,state)
    return (
        <div className="weather-container template-1">
            <div className="state-content text-font-15">
                <p className="default-text">Select City</p>
                <select onChange={(e)=>setState(e.target.value)}>
                       {cities && cities.map(d=>{
                       return <option value={d.city}>{d.city}</option>
                       })}
                </select>
            </div>
            <div className="weather-display bg-color-1  text-white">
                <div style={{display:"flex"}}>
                    <div>
                        <p className="title default-text">Temperature</p>
                        <div style={{paddingLeft:"3rem",display:"flex"}}>
                            <p className="temp podkova-1" style={{paddingTop:"3rem"}}>{Math.round(weather?.main?.temp-273.15)}&#176;c</p>
                            {weather && Object.keys(weather).length>0 ? <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} width="100" height="100"/>:""}
                        </div>
                    </div>
                    <div style={{borderRight:"2px solid #ffffff",height:"80%",alignSelf:"center",marginLeft:"2rem"}}/>
                </div>
                <div >
                        <p className="title default-text">Humidity</p>
                        <p className="weather-props podkova-1">{weather?.main? weather.main?.humidity:"NaN"}</p>
                    <div >
                        <p className="title default-text">Pressure</p>
                        <p className="weather-props podkova-1">{weather?.main? weather.main?.pressure:"Nan"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
