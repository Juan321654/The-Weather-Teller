//key x8MvRdyVjz marker.
//key weather fd4262e97d395dae4da9895a5f543573



const form = document.querySelector('form')
let tempIcon = document.querySelector('#weather-picture')
let tempValue = document.querySelector('#temperature')
let weatherConditions = document.querySelector('#conditions')
let humidityData = document.querySelector('#humidity')
let windSpeedData = document.querySelector('#wind')
let weatherPicture;

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
    tempValue.textContent = `${Math.floor(response.data.main.temp)} \xB0F`
    weatherConditions.textContent = response.data.weather[0].description
    humidityData.textContent = response.data.main.humidity
    windSpeedData.textContent = response.data.wind.speed
    weatherIdData = response.data.weather[0].id
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
  tempValue.addEventListener('click', () => {
    tempValue.innerHTML = Math.floor((parseInt(target) - 32) * 5/9) + '\xB0C';
  })
}

function myFunction() {
  var x = document.querySelector("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "Hello";
  }
}






































// const getOptions = async(cityName) => {
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd4262e97d395dae4da9895a5f543573&units=imperial`
//     try {
//         const response = await axios.get(url)
//         // console.log(response)            
//         const allData = response.data          
//         // console.log(allData)   
//         // removeCity(getValue)                  
//     }catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }
// getOptions()

// const inputButton = document.querySelector('#button')
// // console.log(inputButton)
// inputButton.addEventListener('click', getValue)

// //this function adds gets the user city input, and adds it to the screen
// function getValue (e) {         
//     e.preventDefault()
//     const optionValue = document.querySelector('#user-input').value  
//     console.log(optionValue)      
//     getOptions(optionValue)
//     const cityLocation = document.querySelector('#append')
//     const cityDiv = document.createElement('p')
//     cityDiv.classList.add('#location')
//     cityLocation.append(optionValue)
//     // console.log(cityLocation)
    
// }


// function removeCity () {
//     const oldCity = document.querySelector('#append')
//     console.log(oldCity)
//     while(oldCity.firstChild){
//         oldCity.removeChild(oldCity.firstChild)
//     }
// }