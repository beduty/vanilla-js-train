const API_KEY = "008a55bdb0cf43d2eaa9f72e2f0eba20";
const weather = document.querySelector(".js-weather");


const COORDS = "coords";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        // console.log(json);
        const temperature = json.main.temp;
        const place= json.name;
        weather.innerText = `${temperature} @${place}`;
    });
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    // console.log(position);
    const latitude = position.coord.latitude;
    const longitude = position.coord.longitude;

    const coordObj ={
        latitude:latitude,
        longitude:longitude
    }
    saveCoords(coordObj);
    getWeather(coordObj.latitude, coordObj.longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
    
    const coordObj ={
        latitude:37.475381899999995,
        longitude:127.0430674
    }
    saveCoords(coordObj);
    getWeather(coordObj.latitude, coordObj.longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        console.log("none");
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        // console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();