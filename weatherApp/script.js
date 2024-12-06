let cityName = document.getElementById("city-search");
let button = document.getElementById("btn");
const apiKey = "4f977a5217dbac5f0f307823ad31e5e2"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;










function search(){
    if (cityName.value === "") {
        alert("Please Enter City Name")
    }
    else {

    }
}

button.addEventListener("click", search);

