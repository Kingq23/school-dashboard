function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function get_weather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=newton&appid=82b48f87b2380bc1cdaa44aba7e25525")
    .then(response => response.json())
    .then(data => {
    // do stuff with the data
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
    document.getElementById("weather_data").src=icon
    })
    .catch(() => {
    
    });
}
window.addEventListener('load', (event) => {
  
    startTime()
});