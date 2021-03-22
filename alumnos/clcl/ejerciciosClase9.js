// 1 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Jaén. Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401
const req = new XMLHttpRequest();
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=69a10a322dcf1a85f840bb4588bfc6cd";
req.open("GET", url, true);
req.responseType = "json";
req.onreadystatechange = function (event) {
  if (req.readyState === 4) {
    console.log(req.response);
  }
};

req.send(null);

// 2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Jaén, ahora usando Fetch
