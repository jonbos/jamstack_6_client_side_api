function success(pos) {
  const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=imperial`;
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
