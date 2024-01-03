import { useEffect, useState } from "react";

function WeatherComponent({latitude, longitude}) {
    const [weather, setWeather] = useState(null);

    useEffect(() =>{

        async function fetchWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                // エラー処理
            }
        }
    
      if (latitude && longitude) {
        fetchWeather();
    }

    }, [latitude, longitude])


    return (
        <>
            <div>天気: {weather ? weather.weather[0].main : "読み込み中..."}</div>
        </>
    )
}

export default WeatherComponent;