import { get } from 'axios'

import { URL, KEY } from '../config.json'

export const getBigCityWeather = city =>
  get(`${URL}/weather?q=${city}&APPID=${KEY}`)
