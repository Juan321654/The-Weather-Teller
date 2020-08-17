//key x8MvRdyVjz marker.
//key weather fd4262e97d395dae4da9895a5f543573


const userInput = addEventListener('click', ).value

const getOptions = async() => {
    // let city = 'bronx'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=bronx&appid=fd4262e97d395dae4da9895a5f543573`
    try {
        const response = await axios.get(url)
        console.log(response)            //1
        const allData = Object.keys(response.data)          //2
        console.log(allData)                     //3       //5
    }catch (error) {
        console.log(`Error: ${error}`)
    }
    
    function getValue (e) {         //12         e stands for event
        e.preventDefault()
        const optionValue = document.querySelector('#user-input').value  //13
        console.log(optionValue)      //14•  this wont show on web dev tool yet
        getOptins(optionValue)       //21
    }
}
getOptions()

function getInput (e) {
    e.preventDefault()

}



const cityName = document.querySelector('#user-input')
console.log(cityName)
cityName.addEventListener('click', getValue)