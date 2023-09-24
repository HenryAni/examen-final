const apiKey = '542874aA@';
const apiUrl = 'https://api.weatherapi.com/v1/current.json?key={apikey}&q={lat},{lon}';
 function obtenerDatosMeteorologicos() {
  const ciudad = document.getElementById('cityInput').value;
  const url = `${apiUrl}${ciudad}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>Ciudad no encontrada. Introduce un nombre de ciudad valido.</p>`;
      } else {
        const temperatura = (data.main.temp - 273.15).toFixed(2); 
        const descripcion = data.weather[0].description;

        weatherInfo.innerHTML = `
          <p>Clima en ${ciudad}:</p>
          <p>Temperatura: ${temperatura} C</p>
          <p>Descripcion: ${descripcion}</p>
        `;
      }
    })
    .catch(error => console.error('Error al obtener datos meteorologicos:', error));
}