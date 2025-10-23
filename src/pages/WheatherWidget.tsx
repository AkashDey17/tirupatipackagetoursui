import React, { useState, useEffect } from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  Wind,
} from "lucide-react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const latitude = 13.6288; // Tirupati
  const longitude = 79.4192;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error("Failed to fetch weather", err);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code: number) => {
    if ([61, 63, 65, 80, 81, 82].includes(code))
      return <CloudRain size={40} className="animate-bounce" />;
    if ([71, 73, 75].includes(code))
      return <CloudSnow size={40} className="animate-pulse" />;
    if ([1, 2].includes(code))
      return <CloudSun size={40} className="animate-fade" />;
    if (code === 0) return <Sun size={40} className="animate-spin-slow" />;
    return <Cloud size={40} className="animate-fade" />;
  };

  return (
    weather && (
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "20px",
            padding: "14px",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {getWeatherIcon(weather.weathercode)}
        </div>

        {/* Weather Details Tooltip */}
        {showDetails && (
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0px 6px 18px rgba(0,0,0,0.2)",
              transition: "opacity 0.3s ease-in-out",
              fontSize: "14px",
              animation: "fadeIn 0.3s ease-in-out",
            }}
          >
            <p><strong>🌍 Tirupati, AP</strong></p>
            <p>🌡 Temp: {weather.temperature}°C</p>
            <p>
              <Wind size={15} style={{ display: "inline" }} /> {weather.windspeed} km/h
            </p>
          </div>
        )}
      </div>
    )
  );
};

export default WeatherWidget;
