import React from 'react'

export const formatWeather = Component => ({
  toggleUnits,
  weather,
  weatherFail,
  metric,
  loading
}) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <Component
      datetime={new Date(weather.dt * 1000).toLocaleDateString()}
      temperature={weather.main.temp}
      description={weather.weather[0].description}
      windSpeed={weather.wind.speed}
    />
  )

export const formatSun = Component => ({
  toggleUnits,
  weather,
  weatherFail,
  metric,
  loading
}) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <Component
      sunrise={new Date(weather.sys.sunrise * 1000).toLocaleDateString()}
      sunset={new Date(weather.sys.sunset * 1000).toLocaleDateString()}
    />
  )
