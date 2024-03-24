const apiKey = 'f16f57b779f88b624347ad3ddda902b8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore';


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}
checkWeather();




