import { useEffect, useState } from "react";

function WeatherComponent(props) {
    const [weather, setWeather] = useState(null);

    useEffect(() =>{

        async function fetchWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                // エラー処理
            }
        }
    
      if (props.latitude && props.longitude) {
        fetchWeather();
    }

    }, [props.latitude, props.longitude])


    return (
        <>
            <div>天気: {weather ? weather.weather[0].main : "読み込み中..."}</div>
        </>
    )
}

export default WeatherComponent;