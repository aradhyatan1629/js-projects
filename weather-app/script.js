const apiKey = 'f16f57b779f88b624347ad3ddda902b8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404)
    {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        return;
    }
    
    document.querySelector('.error').style.display = 'none';
    const city = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + ' km/h';

    updateImage(weatherIcon,data);
    document.querySelector('.weather').style.display='block';
    console.log(data);
}

function updateImage(weatherIcon,data){
    if(data.weather[0].main === 'Clouds')
    {
        weatherIcon.src = './images/clouds.png';
    }
    else if(data.weather[0].main === 'Clear')
    {
        weatherIcon.src = './images/clear.png';
    }
    else if(data.weather[0].main === 'Rain')
    {
        weatherIcon.src = './images/rain.png';
    }
    else if(data.weather[0].main === 'Drizzle')
    {
        weatherIcon.src = './images/drizzle.png';
    }
    else if(data.weather[0].main === 'Mist')
    {
        weatherIcon.src = './images/mist.png';
    }
}

searchBtn.addEventListener('click',function(e){
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keypress',function(e){
    if(e.keyCode === 13)
    {
        checkWeather(searchBox.value);
    }
})





