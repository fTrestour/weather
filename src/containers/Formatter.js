import React from 'react'

// Container is the component with context whereas {Container} is not wrapped
import { Container } from '../components/Container'

export const formatWeather = Component => ({ weather, metric, toggleUnits }) =>
  weather == null ? null : (
    <Component
      datetime={new Date(weather.dt * 1000).toLocaleString()}
      temperature={weather.main.temp}
      description={weather.weather[0].description}
      windSpeed={weather.wind.speed}
      tempUnit={metric ? '°C' : '°F'}
      windUnit={metric ? 'm/s' : 'mph'}
      toggleUnits={toggleUnits}
    />
  )

export const formatSun = Component => ({ weather }) =>
  weather.weather == null ? null : (
    <Component
      time={new Date().toLocaleTimeString()}
      sunrise={new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
      sunset={new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
      date={new Date().toLocaleDateString()}
    />
  )

export const formatContainer = (Component, children) => ({
  updateData,
  weather,
  loading
}) =>
  weather.weather == null ? (
    <Container />
  ) : (
    <Component weatherGroup={weather.weather[0].icon} updateData={updateData}>
      {children}
    </Component>
  )
