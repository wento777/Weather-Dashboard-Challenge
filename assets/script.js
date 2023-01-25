var key = "71ab138a380e407b27c85c82c67d4dda";
var city  = "Kansas City"


// add curent date //
// function FormatDay(date){
//     var date = new Date();
//     console.log(date);
//     var month = date.getMonth()+1;
//     var day = date.getDate();
    
//     var dayOutput = date.getFullYear() + '/' +
//         (month<10 ? '0' : '') + month + '/' +
//         (day<10 ? '0' : '') + day;
//     return dayOutput;

//


var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=Kansas+City&units=imperial`;
fetch (weatherUrl).then(response=> {
    return response.json()
}) .then(data=> {
    console.log(data)
    displyCurentWeather(data)
})

//Added curent date/month/year
function displyCurentWeather(data) {
$(".cardTodayDate").text(dayjs.unix(data.dt).format("M/D/YYYY"))
 

let tempEl = document.createElement("h2");
let humidityEl = document.createElement("h2");
let windEl = document.createElement("h2");
tempEl.textContent = `Temperature: ${data.main.temp} °F`
humidityEl.textContent = `Humidity: ${data.main.humidity} % `
windEl.textContent = ` Wind Speed: ${data.wind.speed} MPH`
let icon = document.createElement("img")
var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
icon.setAttribute("src", iconUrl)

$(".cardBodyToday").append(icon, tempEl,humidityEl,windEl,);

}
