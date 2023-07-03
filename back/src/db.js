const {connect } = require("mongoose");
const {URI} = process.env;

const mongoose = connect(URI).then(db => console.log(`'db is connected'`)
).catch(err => console.log(err) 
);



