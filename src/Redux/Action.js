import axios from "axios";

export const GET_CITIES = "GET_CITIES"
export const GET_WEATHER = "GET_WEATHER"
export const LOADING = "LOADING"

const getCityData=(country)=>{
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {countryIds: `${country}`},
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key': 'f8770e65fdmshf6f8c83bdae5297p1b5410jsn3a020edc85e2'
        }
      };
    return async(dispatch)=>{
        try{
            dispatch({type:LOADING, payload:true})
            const req=await axios.request(options)
            // .then((res)=>{res.json()})
            // .then(function (response) {
            dispatch({type:GET_CITIES,payload:req.data.data});
            dispatch({type:LOADING, payload:false})
            console.log(req)
        }catch (error) {
            dispatch({ type: LOADING, payload: false });
            return error;
        }
    }
}

const getWeatherData = (city)=>{
    const API = "c0899d4063f31d1b7c2d2d6238bfb28e"
    axios.defaults.baseURL = 'http://api.openweathermap.org';
    const url = `/data/2.5/weather?q=${city}&appid=${API}`
    return async(dispatch)=>{
        try{
            dispatch({type:LOADING, payload:true})
            const req = await axios.get(url)
            dispatch({type:GET_WEATHER,payload:req.data})
            dispatch({type:LOADING, payload:false})
        }catch(error){
            dispatch({type:LOADING, payload:false})
            throw(error)
        }
    }
}

export const Action={
    getCityData,
    getWeatherData
}