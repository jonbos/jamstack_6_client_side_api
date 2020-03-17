function success(pos) {
  const WEATHER_API_KEY = "b31c0c067c03dc02f682084b6a184f53";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${WEATHER_API_KEY}&units=imperial`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      document.querySelector("#city").textContent = data.name;
      document.querySelector("#temp").textContent = data.main.temp + "°F";
      document.querySelector("#main").textContent = data.weather[0].main;
      document.querySelector("#desc").textContent = data.weather[0].description;
      
      // progressive enhancement - only display div if successful request is made
      document.querySelector("#weather").classList.remove("hidden");
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
