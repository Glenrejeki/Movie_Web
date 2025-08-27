const apiKey = 'de64676aa2249b1361df2a3ad1e9fd93'

const locationElement = document.getElementById('location')
const tempartureElement = document.getElementById('temparature')
const descriptionElement = document.getElementById('description')
const weatherIconElement = document.getElementById('weather-icon')

// Get the weather from openweather 


async function getWeather(latitude, longitude) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`


    try {
        const response = await fetch(apiURL)
        const data = await response.json()

        locationElement.textContent = `${data.name},${data.sys.country}`
        tempartureElement.textContent = `Temperature :${data.main.temp} °C`
        descriptionElement.textContent =`Description ${data.weather[0].description}`
        const iconCode  = data.weather[0].icon
        weatherIconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather Icon">`

    } catch (error) {
        console.error('Error Fetching weather data')
        alert('Failed to fetch weather data. Please try again later ')
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=> {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            getWeather(latitude, longitude)
        }, error=> {
            alert('Failed to get your location. Please Enable location services')
        })
    } else{
        alert('Geolocation is not support by your browser')
    }
}

// Cal function getLocation when web open

window.onload = getLocation