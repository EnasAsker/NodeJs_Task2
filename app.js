const forecast = require ("./forecast")
const geocode = require ("./geocode")

const country = process.argv[2]
geocode (country, (error, data) => {
    console.log("ERROR: ", error)
    console.log("DATA: ", data)
    if (data){
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log("ERROR: ", error)
            console.log("DATA: ", data)
       } )
    }
    else {
        console.log("The data you entered has an error")
    }
   
} ) 