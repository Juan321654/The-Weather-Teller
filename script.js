//key x8MvRdyVjz marker.
//key weather fd4262e97d395dae4da9895a5f543573



const form = document.querySelector('form');
let tempIcon = document.querySelector('#weather-picture');
let tempValue = document.querySelector('#temperature');
let fahrenheitButton = document.querySelector('.fahrenheit');
let celsiusButton = document.querySelector('.celsius');
let weatherConditions = document.querySelector('#conditions');
let humidityData = document.querySelector('#humidity');
let windSpeedData = document.querySelector('#wind');
let weatherPicture;
let minTempData = document.querySelector('#min-temp');
let maxTempData = document.querySelector('#max-temp');

//this function gets the user input
const formValue = function (e) {
  e.preventDefault()
  const input = document.querySelector('input').value
  document.querySelector('input').value = ''
  console.log(input)
  getData(input)
}
async function getData(cityName) {
  try {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd4262e97d395dae4da9895a5f543573&units=imperial`)
    console.log(response.data)
    appendCityData(response.data)
    tempValue.textContent = `${Math.floor(response.data.main.temp)} \xB0F`;
    weatherConditions.textContent = response.data.weather[0].description;
    humidityData.textContent = " " + response.data.main.humidity + "%";
    windSpeedData.textContent = response.data.wind.speed
    minTempData.textContent = response.data.main.temp_min
    maxTempData.textContent = response.data.main.temp_max
    weatherIdData = response.data.weather[0].id;
    // console.log(weatherIdData)
    if (weatherIdData < 250 ){
        tempIcon.src = './Pictures/thunder.png'
    }else if (weatherIdData < 350) {
        tempIcon.src = './Pictures/drizzle.png'
    }else if (weatherIdData < 550) {
        tempIcon.src = './Pictures/rain.png'
    }else if (weatherIdData < 650) {
        tempIcon.src = './Pictures/snow.png'
    }else if (weatherIdData < 790) {
        tempIcon.src = './Pictures/mist.png'
    }else if (weatherIdData === 800) {
        tempIcon.src = './Pictures/sun.png'
    }else if (weatherIdData > 800) {
        tempIcon.src = './Pictures/cloud.png'
    }
    switchFtoC(tempValue.textContent)
    switchCtoF(tempValue.textContent)
    minTempSwitchFtoC(minTempData.textContent)
    minTempSwitchCtoF(minTempData.textContent)
    maxTempSwitchCtoF(maxTempData.textContent)
    maxTempSwitchFtoC(maxTempData.textContent)
    windMphtoKph(windSpeedData.textContent)
    windKphtoMph(windSpeedData.textContent)
    
    // switchCtoF(tempValue.textContent)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}


function appendCityData(cityData) {
//   console.log("line 22", cityData.name)
  const cityNameEl = document.querySelector('#user-city')
  cityNameEl.textContent = cityData.name
}


form.addEventListener('submit', formValue)

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
    windSpeedData.innerHTML = " " + Math.round(target * 1.609) + " Kph"
  })
}

function windKphtoMph (target) {
  fahrenheitButton.addEventListener('click', () => {
    windSpeedData.innerHTML = " " + Math.round(target / 1.609) + " Mph"
  })
}