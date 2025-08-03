
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getHourlyForecast, getWeatherByCity } from '../../../api/weather';


const HourForecast= () => {
  
  const [hourlyData, setHourlyData] = useState<any[]>([]);
    const [city] = useState("Delhi");

  useEffect(()=>{
    const fetchForecast = async () => {
      try {
        const cityData = await getWeatherByCity(city);
        const { lat, lon } = cityData.coord;
        const data = await getHourlyForecast(lat, lon); // or your dynamic city
        setHourlyData(data.list.slice(0, 6)); // Get next 6 time slots (~18 hours)
      } catch (err) {
        console.error("Failed to fetch forecast:", err);
      }
    };

    fetchForecast();
  }, []);
  return (
    <div className="bg-gray-500 rounded-md px-20 py-20 mt-4 ">

      <div className='flex text-white text-xl gap-3 items-center'>
              <Clock/>
              <p>HOURLY FORECAST</p>
      </div>
        <div className="flex gap-4 overflow-x-auto">
        {hourlyData.map((hour, index) => (
          <div key={index} className="bg-gray-700 rounded-md p-4 text-center text-white min-w-[100px]">
            <p className="text-sm font-semibold">
              {format(new Date(hour.dt * 1000), 'hh:mm a')}
            </p>
            <p className="text-lg">{hour.main.temp}°C</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HourForecast
