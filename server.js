const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");
const { response } = require("express");

const port = 2888;

//TODO: Create your GET Request Route Below: 
app.get("/resturant", async (request, response)=> {
    const fetch = await Restaurant.findAll()
    response.json (fetch)
})


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})