async function getWeatherData(city) {

    const apiKey = "9f88cc4a7fe9d1056152720630a26463"
    const units = "metric"
    

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
  
    try {

      const response = await fetch(apiUrl);
      const data = await response.json();
  

      document.querySelector(".city").innerHTML = data.name
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
      document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%"
      document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/hr"
      document.querySelector(".weather-description").innerHTML = data.weather[0].main
  

      if (data.weather[0].main == "Clouds") {
        weatherIconEl.src = "4102315_cloud_weather_icon.png"
      } else if (data.weather[0].main == "Clear") {
        weatherIconEl.src = "2671737_clear_cloud_cloudy_day_weather_icon.png"
      } else if (data.weather[0].main == "Rain") {
        weatherIconEl.src = "4102318_cloud_heavy rain_rain_storm_thunderbolt_icon.png"
      } else if (data.weather[0].main == "Drizzle") {
        weatherIconEl.src = "5719171_cloud_drizzle_rain_weather_icon.png"
      } else if (data.weather[0].main == "Snow") {
        weatherIconEl.src = "2682816_cloud_cloudy_forecast_precipitation_snow_icon.png"
      } else if (data.weather[0].main == "Mist") {
        weatherIconEl.src = "2682812_cloud_coudy_day_fog_mist_icon.png"
      }
    } catch (error) {

      console.log('Error fetching weather data:', error.message)
    }
  }
  

  const searchBox = document.querySelector(".search input")
  const searchBtn = document.querySelector(".search button")
  const weatherIconEl = document.querySelector(".weather-icon")
  

  searchBtn.addEventListener("click", () => {
    getWeatherData(searchBox.value);

    searchBox.value = ""
  })
