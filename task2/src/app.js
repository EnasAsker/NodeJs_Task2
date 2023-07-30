const express = require('express')
const app = express()
const port = process.env.PORT || 3000

    
const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))


app.set('view engine', 'hbs');
const viewsDirectory = path.join (__dirname , "../views" )
app.set( "views" , viewsDirectory)

var hbs = require ('hbs')
const partialsPath = path.join (__dirname , "../partials")
hbs.registerPartials(partialsPath)


    app.get('/' , (req , res) => {
        res.render('index' , {
            img: "Images/we.jpg"
        })
    })

app.get('/weather', (req , res) => {
        res.render('WEATHER' , {
         country: "Japan",
        longitude: 138.252924,
            latitude: 36.204824,
            weather: "Rainy",
            temperature: 12
    })
})

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
