


var key = "71ab138a380e407b27c85c82c67d4dda";
var city  = "Kansas City"
var button = document.getElementById("button-addon2");


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
getFiveDayForecast();



var fiveForecastEl = $('.fiveForecast');

function getFiveDayForecast() {
	var fiveforcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`;

    fetch (fiveforcast).then(response=> {
        return response.json()
    }) .then(data=> {
        console.log(data)
        // displyFiveforcast(data)

        function forecast5(){
            var fivedayforcast= `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&q=${input}&untis=imperial`; 
            fetch (fivedayforcast).then(response=> {
                return response.json()
            }) .then(data=> {
                console.log(data)
                displyFiveDay(data)
            })
            }
            
            function fivedayforcast(data){
            
            
                for(var i=0; i < 5; i++){
                $(".fiveForecast").text(dayjs.unix(data[i].dt).format("M/D/YYYY"))
       
	

            
    let tempEl = document.createElement("h2");
    let humidityEl = document.createElement("h2");
    let windEl = document.createElement("h2");
    tempEl.textContent = `Temperature: ${data[i].main.temp} °F`
    humidityEl.textContent = `Humidity: ${data[i].main.humidity} % `
    windEl.textContent = ` Wind Speed: ${data[i].wind.speed} MPH`
    let icon = document.createElement("img")
    var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute("src", iconUrl)
    
    $(".fiveForecast").append(icon, tempEl,humidityEl,windEl,);
    }
}
    })
}
$(button).on("click", function(){
    console.log(input);
    currentweather();
    forecast5();
})