import React from 'react'

export const formatWeather = Component => ({ weather, metric, loading }) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <Component
      datetime={new Date(weather.dt * 1000).toLocaleString()}
      temperature={weather.main.temp}
      description={weather.weather[0].description}
      windSpeed={weather.wind.speed}
      tempUnit={metric ? '°C' : '°F'}
      windUnit={metric ? 'm/s' : 'mph'}
    />
  )

export const formatSun = Component => ({ weather, loading }) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <Component
      time={new Date().toLocaleTimeString()}
      sunrise={new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
      sunset={new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
      date={new Date().toLocaleDateString()}
    />
  )

export const formatContainer = (Component, children) => ({
  updateData,
  toggleUnits,
  weather,
  loading
}) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <Component
      weatherGroup={weather.weather[0].icon}
      updateData={updateData}
      toggleUnits={toggleUnits}>
      {children}
    </Component>
  )
