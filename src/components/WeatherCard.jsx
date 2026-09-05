import { weatherMock } from '../weatherMock'

function WeatherCard() {
    return (
        <div className="bg-gray-300/10 max-w-lg w-full  min-h-56 p-4 z-20 shadow-xl rounded-2xl border border-white/15 space-y-2 flex flex-col items-center">
            <div className="flex flex-col justify-center items-start w-full space-y-2 p-4 rounded-2xl bg-[#182929]/10">

                <p className="text-white text-sm">{weatherMock.current.date}</p>
                <h2 className="text-white text-2xl lg:text-4xl font-bold ">{weatherMock.current.condition} {weatherMock.current.temperature} °c</h2>
                <p className="text-white text-sm lg:text-xl">{weatherMock.location.city}, {weatherMock.location.country}</p>

            </div>
            <div className="bg-[#182929] w-full rounded-2xl flex justify-center space-x-1.5 p-2">
                <span className="text-white text-sm lg:text-xl font-light">Rain:</span>
                <p className="text-white text-sm lg:text-xl font-light ">{weatherMock.current.rainProbability}%</p>
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 w-full">
                {weatherMock.forecast.map((day) => (
                    <div key={day.id} className="flex  lg:flex-col items-center space-y-2 px-2 py-4 rounded-2xl text-white bg-[#182929]/10">
                        <div className="flex flex-col">
                            <p className="text-sm">{day.day}</p>
                            <p className="text-sm">{day.condition}</p>
                            <strong>{day.maxTemp}°</strong>
                            <span>{day.minTemp}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherCard