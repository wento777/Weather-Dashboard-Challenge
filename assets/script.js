var key = "71ab138a380e407b27c85c82c67d4dda";
var city  = "Kansas City"
var cityList = $("#city-list");

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


}