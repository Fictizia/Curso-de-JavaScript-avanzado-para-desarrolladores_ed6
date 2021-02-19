function getWeather(city) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e00db20c2d73fe030365db03138311c`, true);
    req.responseType = 'html';
    req.onreadystatechange = function (event) {
        console.log(req.response);
    };
    req.send();
}

getWeather('Madrid');

function fetchWeather(city) {
    const res = document.getElementById('res');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e00db20c2d73fe030365db03138311c`)
        .then(response => response.json())
        .then(resultado => console.log(resultado));
}

fetchWeather('Madrid');