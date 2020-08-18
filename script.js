//key x8MvRdyVjz marker.
//key weather fd4262e97d395dae4da9895a5f543573

const form = document.querySelector('form')
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
    // console.log(response.data)
    appendCityData(response.data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
function appendCityData(cityData) {
  console.log("line 22", cityData.name)
  const cityNameEl = document.querySelector('div')
  cityNameEl.textContent = cityData.name
}
form.addEventListener('submit', formValue)





































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