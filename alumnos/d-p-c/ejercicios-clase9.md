**Ejercicio**

**1 -** Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Jaén. Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```javascript
const apiKey = "69a10a322dcf1a85f840bb4588bfc6cd";

const req = new XMLHttpRequest();
// Indicamos verbo, URL y si queremos que sea asíncrona
let city = "Madrid";
req.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  true
);
req.onreadystatechange = function (event) {
  if (req.readyState === 4) {
    console.log("response", JSON.parse(req.response));
  }
};
req.send(null);

const req2 = new XMLHttpRequest();
city = "Barcelona";
req2.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  true
);
req2.onreadystatechange = function (event) {
  if (req2.readyState === 4) {
    console.log("response", JSON.parse(req2.response));
  }
};
req2.send(null);

const req3 = new XMLHttpRequest();
city = "Jaen";
req3.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  true
);

req3.onreadystatechange = function (event) {
  if (req3.readyState === 4) {
    console.log("response", JSON.parse(req3.response));
  }
};
req3.send(null);
```
