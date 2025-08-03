import axios from "axios";

 
 const ApiKey = "02dffb2d852e05bd6f7e77dbcf5c72e5";
 const Base_URL = "https://api.openweathermap.org/data/2.5/weather"
 const Hourly_URL ="https://pro.openweathermap.org/data/2.5/forecast"
  export const getWeatherByCity = async(city:string) => {
    try{
       const res = await axios.get(Base_URL,{
        params:{
            q:city,
            appid:ApiKey,
            units:"metric"
        },
       })
       return res.data;

    }
    catch(error){
        console.error("Error fetching weather", error);
        throw error;

    }

  };
  export const getHourlyForecast = async(lat: number, lon: number): Promise<any>=>{
    try{
   const result = await axios.get(Hourly_URL,{
    params:{
        lat,
        lon,
        appid: ApiKey,
        units: "metric"
    }
   })
   return result.data;
    }
    catch(error){
        console.error("Error fetching weather", error);
        throw error;

    }
  }