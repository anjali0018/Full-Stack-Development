function getWeather() {
  const city = document.getElementById("cityInput").value.toLowerCase();
  const weatherInfo = document.getElementById("weatherInfo");

  // Sample offline weather data
  const sampleData = {
    delhi: { temp: "32°C", desc: "Sunny", wind: "15 km/h" },
    mumbai: { temp: "28°C", desc: "Cloudy", wind: "10 km/h" },
    london: { temp: "20°C", desc: "Rainy", wind: "12 km/h" },
    paris: { temp: "22°C", desc: "Clear", wind: "9 km/h" },
    newyork: { temp: "25°C", desc: "Stormy", wind: "20 km/h" }
  };

  if (sampleData[city]) {
    const data = sampleData[city];
    weatherInfo.innerHTML = `
      <p><strong>Temperature:</strong> ${data.temp}</p>
      <p><strong>Description:</strong> ${data.desc}</p>
      <p><strong>Wind Speed:</strong> ${data.wind}</p>
    `;
  } else {
    weatherInfo.innerHTML = `<p>Weather data not available for "${city}"</p>`;
  }
}
