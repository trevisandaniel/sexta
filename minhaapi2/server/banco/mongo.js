const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/meuteste?authSource=meuteste";

mongoose.connect(uri,{ });