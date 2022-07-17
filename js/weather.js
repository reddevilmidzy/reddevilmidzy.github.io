const API_KEY ="a69c5e084b38cfd4a97523e79ea17b0e"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //console.log(url);
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp} C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
