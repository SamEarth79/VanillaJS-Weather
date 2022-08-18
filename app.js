//Selectors
let lat
let lon
const locationCity = document.querySelector(".location-city")
const temperatureDegree = document.querySelector(".temperature-degree")
const temperatureDescription = document.querySelector(".temperature-description")

//Event Listeners
window.addEventListener("load", getData);

//Fucntions
function getData(){
    
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            console.log(lat+" "+lon);

            const proxy="https://cors-anywhere.herokuapp.com/"
            const apiKey="b752b6bad878076681bc0ffc4e0e5d0c";
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    locationCity.textContent=data.name;
                    temperatureDegree.textContent=data.main.temp;
                    temperatureDescription.textContent=data.weather[0].description;
                    console.log(data.name);

                })
        });
    }

}