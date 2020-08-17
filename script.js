//key x8MvRdyVjz marker.
//key weather fd4262e97d395dae4da9895a5f543573




const getOptions = async(cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd4262e97d395dae4da9895a5f543573`
    try {
        const response = await axios.get(url)
        console.log(response)            //1
        const allData = response.data          //2
        console.log(allData)                     //3       //5
    }catch (error) {
        console.log(`Error: ${error}`)
    }
    
}
getOptions()

// function getInput (e) {
//     e.preventDefault()

// }

const inputButton = document.querySelector('#button')
// console.log(inputButton)
inputButton.addEventListener('click', getValue)

// const userInput = addEventListener('click', cityName)

function getValue (e) {         //12         e stands for event
    e.preventDefault()
    const optionValue = document.querySelector('#user-input').value  //13
    console.log(optionValue)      //14•  this wont show on web dev tool yet
    getOptions(optionValue)
    const cityLocation = document.querySelector('#location')
    const cityDiv = document.createElement('p')
    cityDiv.classList.add('#location')
    cityDiv.append(optionValue)
    console.log(cityLocation)
}