const currentYear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastmodified")

currentYear.textContent = new Date().getFullYear()
lastModified.textContent = "Last Modification: "  + document.lastModified

// wind chill calculation (metric: °C, km/h)

function calculateWindChill(temp, wind){
    return 13.12 + 0.6215 * temp -11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}
const temperature = 22;
const windSpeed = 5;

const windChill = document.querySelector("#wind-chill");

if(temperature <= 10 && windSpeed > 4.8){
    windChill.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}else{
    windChill.textContent = "N/A";
}