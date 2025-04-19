const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
      name:{
        type:String,
        required : true,
      },
      email:{
        type:String,
        required : true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ],
      },
      number:{
        type: Number,
        required : true,
      },

      src :{
        type: String,
      },

      date :{
         type : Date,
         required : true,
      }

})

let Data = mongoose.model("Data",dataSchema);

module.exports = Data;