//key weather fd4262e97d395dae4da9895a5f543573

//global variables
const form = document.querySelector('form');
let tempIcon = document.querySelector('#weather-picture');
let tempValue = document.querySelector('#temperature');
let fahrenheitButton = document.querySelector('.fahrenheit');
let celsiusButton = document.querySelector('.celsius');
let weatherConditions = document.querySelector('#conditions');
let humidityData = document.querySelector('#humidity');
let windSpeedData = document.querySelector('#wind');
let minTempData = document.querySelector('#min-temp');
let maxTempData = document.querySelector('#max-temp');
let bodyTextColor = document.querySelector('#body')

//this function gets the user input for the name of the city
const formValue = function (e) {
  e.preventDefault();
  const input = document.querySelector('input').value;
  document.querySelector('input').value = '';
  getData(input);
}

form.addEventListener('submit', formValue);

//this function gets the info from the API
async function getData(cityName) {
  try {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd4262e97d395dae4da9895a5f543573&units=imperial`);
    appendCityData(response.data);
    tempValue.textContent = `${Math.floor(response.data.main.temp)} \xB0F`;
    weatherConditions.textContent = response.data.weather[0].description;
    humidityData.textContent = " " + response.data.main.humidity + "%";
    windSpeedData.textContent = response.data.wind.speed;
    minTempData.textContent = response.data.main.temp_min;
    maxTempData.textContent = response.data.main.temp_max;

    weatherIdData = response.data.weather[0].id;

    //use this variable to test the if conditions (comment out the actual variable)----
    // weatherIdData = 349        
    //---------------------------------------------------------------------------------

    //pictures and text color to display depending on weather ID
    if (weatherIdData < 250 ){
        tempIcon.src = './Pictures/thunder.png';
        bodyTextColor.style.color = "#8f7727";
        celsiusButton.style.color = "#8f7727";
        fahrenheitButton.style.color = "#8f7727";
    }else if (weatherIdData < 350) {
        tempIcon.src = './Pictures/drizzle.png';
        bodyTextColor.style.color = "#4d7d74";
        celsiusButton.style.color = "#4d7d74";
        fahrenheitButton.style.color = "#4d7d74";
    }else if (weatherIdData < 550) {
        tempIcon.src = './Pictures/rain.png';
        bodyTextColor.style.color = "#3cccbe";
        celsiusButton.style.color = "#3cccbe";
        fahrenheitButton.style.color = "#3cccbe";
    }else if (weatherIdData < 650) {
        tempIcon.src = './Pictures/snow.png';
        bodyTextColor.style.color = "#4e6670";
        celsiusButton.style.color = "#4e6670";
        fahrenheitButton.style.color = "#4e6670";
    }else if (weatherIdData < 790) {
        tempIcon.src = './Pictures/mist.png';
        bodyTextColor.style.color = "#6491a8";
        celsiusButton.style.color = "#6491a8";
        fahrenheitButton.style.color = "#6491a8";
    }else if (weatherIdData === 800) {
        tempIcon.src = './Pictures/sun.png';
        bodyTextColor.style.color = "#db9652";
        celsiusButton.style.color = "#db9652";
        fahrenheitButton.style.color = "#db9652";
    }else if (weatherIdData > 800) {
        tempIcon.src = './Pictures/cloud.png';
        bodyTextColor.style.color = "#4e6670";
        celsiusButton.style.color = "#4e6670";
        fahrenheitButton.style.color = "#4e6670";
    }

    //switches to display F or C, mph or kph
    switchFtoC(tempValue.textContent);
    switchCtoF(tempValue.textContent);
    minTempSwitchFtoC(minTempData.textContent);
    minTempSwitchCtoF(minTempData.textContent);
    maxTempSwitchCtoF(maxTempData.textContent);
    maxTempSwitchFtoC(maxTempData.textContent);
    windMphtoKph(windSpeedData.textContent);
    windKphtoMph(windSpeedData.textContent);
    
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

//name of city to display on screen
function appendCityData(cityData) {
  const cityNameEl = document.querySelector('#user-city');
  cityNameEl.textContent = cityData.name;
}



//switches for F and C, mph and kph ---------------
function switchFtoC (target) {
  celsiusButton.addEventListener('click', () => {
    tempValue.innerHTML = Math.round((parseInt(target) - 32) * 5/9) + '\xB0C';
  })
}

function switchCtoF (target) {
  fahrenheitButton.addEventListener('click', () => {
    tempValue.innerHTML = Math.round((parseInt(target) * 5/9) + 32 ) + '\xB0F';
  })
}

function minTempSwitchFtoC (target) {
  celsiusButton.addEventListener('click', () => {
    minTempData.innerHTML = Math.round((parseInt(target) - 32) * 5/9) + '\xB0C';
  })
}

function minTempSwitchCtoF (target) {
  fahrenheitButton.addEventListener('click', () => {
    minTempData.innerHTML = Math.round((parseInt(target) * 5/9) + 32 ) + '\xB0F';
  })
}

function maxTempSwitchFtoC (target) {
  celsiusButton.addEventListener('click', () => {
    maxTempData.innerHTML = Math.round((parseInt(target) - 32) * 5/9) + '\xB0C';
  })
}

function maxTempSwitchCtoF (target) {
  fahrenheitButton.addEventListener('click', () => {
    maxTempData.innerHTML = Math.round((parseInt(target) * 5/9) + 32 ) + '\xB0F';
  })
}

function windMphtoKph (target) {
  celsiusButton.addEventListener('click', () => {
    windSpeedData.textContent = " " + Math.round(target * 1.609) + " Kph";
  })
}

function windKphtoMph (target) {
  fahrenheitButton.addEventListener('click', () => {
    windSpeedData.textContent = " " + Math.round(target / 1.609) + " Mph";
  })
}