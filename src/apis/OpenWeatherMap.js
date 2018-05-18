import { get } from 'axios'

import { URL, KEY } from '../config.json'

export const getBigCityWeather = (city, metric = true) =>
  get(
    `${URL}/weather?q=${city}&APPID=${KEY}&units=${
      metric ? 'metric' : 'imperial'
    }`
  )
