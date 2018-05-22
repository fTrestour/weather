# How to launch

* Add a `config.json` file in `src/` at root level. It should look like this:

```
{
  "URL": "http://api.openweathermap.org/data/2.5",
  "KEY": <<API_KEY>>
}
```

* `yarn` or `npm install`
* `yarn start` or `npm start` to launch the development server
* `yarn build` or `npm run build` to build the project

# Follow Up Questions

## How long ?

Around 6 hours. It's more than expected but I spent a lot of time on all the CSS to make it good looking.

## What went well ?

Data fetching went really well as OpenWeatherMap's API is very simple.
All the styling work also went well, even if it was a bit time consuming. I had a clear idea about what I was going for so I didn't have to experiment a lot on look and feel.

## What didn't make it to the final code ?

I intended to put an icon for weather decription, using the API's icon name value. I found a nice [icons set](https://iconstore.co/icons/rns-weather-icons/) which suits my design nicely. I planned to use the svg files to be able to change the image color with css (that's necessary as the page's color changes according to the weather). However the process for loading the right svg file according to the weather was quite tedious and I didn't find a way to make it efficient.

## Possible improvements

* I wanted to improve my page's responsiveness, as it currently doesn't display nicely on phone screens due to width constraints.
* As explained above, icons on the weather page is an improvement I would like.
* I chose to make different requests on the weather API according to the chosen units system. I think it was not a good choice as changing the units system triggers a rerender for almost all of the page, whereas, if I only did a request in one system and did the conversions on the frontend, the unit system update would have been way lighter.
* Adding a few animations on both page changes and unit changes would allow the app to look great.
* Real time updates on the current time value for the sunrise/sunset page is also a possible improvement.
