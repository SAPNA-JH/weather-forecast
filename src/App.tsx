import HourForecast from "./components/weatherInfoCard/foreCast"
import MainContent from "./pages/MainContent"

const App = () => {
  return (
    <div className="grid grid-cols-2 ">
      <MainContent/>
      <div className="">
        <HourForecast/>
        <HourForecast/>
      </div>
    </div>
  )
}

export default App
