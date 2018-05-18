import React from 'react'

export const formatWeather = Component => ({ weather, loading }) =>
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

export const formatSun = Component => ({ weather, loading }) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <Component
      sunrise={new Date(weather.sys.sunrise * 1000).toLocaleDateString()}
      sunset={new Date(weather.sys.sunset * 1000).toLocaleDateString()}
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
