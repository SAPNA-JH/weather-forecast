import type { WeatherInfoElement } from "../../../types/weaatherElement"

const WeatherInfoCard= ({icon, title, subtext,secondaryText}:WeatherInfoElement) => {
  return (
    <div className=" bg-gray-900 rounded-md  m-3 w-52 md:w-60 h-48 md:h-56 justify-center items-center">
         <div className="flex items-center justify-center"> 
            <p>{icon}</p>
             <p>{subtext}</p>     
         </div>
       <div className="flex flex-col items-center justify-center ">
         <p>{title}</p>
        <p>{secondaryText}</p>
       </div>

    </div>
  )
}

export default WeatherInfoCard
