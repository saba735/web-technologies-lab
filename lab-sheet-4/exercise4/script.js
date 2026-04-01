const apiKey = "YOUR_API_KEY";
let lastResult = null;

document.getElementById("btn").addEventListener("click", function(){

    const city = document.getElementById("city").value;
    const output = document.getElementById("output");

    output.innerHTML = "Loading...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => {
        if(!res.ok){
            throw new Error("City not found");
        }
        return res.json();
    })
    .then(data => {

        lastResult = data;

        output.innerHTML = `
            Temperature: ${data.main.temp}°C <br>
            Humidity: ${data.main.humidity}% <br>
            Condition: ${data.weather[0].description}
        `;
    })
    .catch(err => {
        output.innerHTML = err.message;
    });

});
