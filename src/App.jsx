import './App.css'
import WeatherCard from './components/WeatherCard'
import clearSunny from './assets/Clear_sunny_sky_looping_background_202608292117.mp4'

function App() {
  return (
    <section className="min-h-dvh  w-full p-4 relative flex justify-center items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto min-h-full  min-w-full max-w-none object-contain z-10"
      >
        <source src={clearSunny} type="video/mp4" />
      </video>

      <WeatherCard />
     
      

    </section>
  )
}

export default App
