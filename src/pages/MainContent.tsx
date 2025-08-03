import { Droplet, Droplets, Eye, Thermometer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../api/weather';
import SearchBar from "../components/searchBar/index";
import WeatherInfoCard from '../components/weatherInfoCard/currentWeather';





const MainContent = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState("Delhi");
  const handleSearch = (cityName: string) => {
    setCity(cityName);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherByCity(city);
        console.log("Weather data:", data);
        setWeather(data);

      }
      catch (error) {
        console.error(error);
      }
    };
    fetchData();

  }, [city]);

  return (
    <aside className=' w-full h-full overflow-y-auto  bg-red' >
      <SearchBar onSearch={handleSearch} />

      <div className="w-full max-w-xl  flex flex-col px-4 py-10 bg-gray-500 justify-center items-center rounded-md m-5">
        <p className=' font-semibold px-4 py-4 text-5xl '>{weather?.main?.temp}°C</p>
        <p className='text-3xl px-2 py-3'>{weather?.weather?.[0]?.description} Day</p>
        <p className='px-2 pt-2 pb-8'>Today, expect a {weather?.weather?.[0]?.description} day with temperatures reaching a maximum of {weather?.main?.temp_max}°C.
          Make sure to carry appropriate gear!</p>           
         <div className='flex'>
          <WeatherInfoCard icon={<Thermometer />} title={`${weather?.main?.feels_like}°C`} subtext="Feels Like" secondaryText="Feels warmer due to humidity"/>
          <WeatherInfoCard icon={ <Droplet />} title={`${weather?.rain?.['1h'] ?? 0} mm`} subtext="Precipitation" secondaryText="Last 1hr" />
        </div>
        <div className='flex'>
          <WeatherInfoCard icon={ <Eye />} title={`${(weather?.visibility / 1609).toFixed(1)} mi`} subtext="Visibility" secondaryText="Distance you can see"/>
          <WeatherInfoCard icon={<Droplets />}  title={`${weather?.main?.humidity}%`} subtext="Humidity" secondaryText="Dew point info"/>
        </div>
      </div>
    </aside>
  )
}

export default MainContent
