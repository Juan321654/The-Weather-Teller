# Project Overview

## Project Name

The Weather Teller

## Project Description

The Weather Teller its a place where you can find the current weather in your area or other cities. 
do you want to go out to the beach? Maybe go on a picnic? This app will let you know how windy, cloudy, rainy, or humid it is outside so you can plan accordingly.

## API and Data Sample

https://openweathermap.org/current

Sample JSON:
```json
{
    "coord": {
        "lon": -73.92,
        "lat": 40.83
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 301.4,
        "feels_like": 299.47,
        "temp_min": 300.37,
        "temp_max": 302.59,
        "pressure": 1016,
        "humidity": 48
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.7,
        "deg": 50
    },
```

## Wireframes

https://wireframe.cc/DBy7pV
 

#### MVP 

- choose a city
- choose between Fahrenheit and Celsius
- display weather conditions such as humidy, cloudy etc.

#### PostMVP  

- make the background change to warm or cool colors depending on the temp
- make transition effect when clicking F to C
- make a transition to the background when changing colors
- make text color change according to temp
- make city, icon, temp, description, conditions fade in when called.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval | Complete
|August 18| Core Application Structure (HTML, CSS, etc.) | Complete
|August 19| Initial Clickable Model  | Complete
|August 20| MVP | Complete
|August 21| Presentations | Incomplete

## Priority Matrix

[![Matrix1.png](https://i.postimg.cc/gjr4NpKj/Matrix1.png)](https://postimg.cc/T5Mr3ZFv)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML structure | L | 2 hrs| 1hr |  |
| Working with API | H | 3hrs| 5hr |  |
| Basic CSS | L | 3hrs| 5hr |  |
| changing C to F | H | 2 hr| 5hr |  |
| displaying conditions | H | 3 hrs| 2hr |  |
| displaying city | H | 3 hrs| 3hr |  |
| displaying weather icons | H | 3 hrs| 1hr |  |
| Total | H | 31 hrs| 22 | |
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
