const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const groupSchema = mongoose.Schema({
   name: {type: String, required: true, unique: true},  
   members: {type: Array, required: true, default: []},
   adminId: {type: mongoose.Schema.Types.ObjectId, required: true},
   status: {type: String, required: true, default: "active"}, 
},{ timestamps: true });

groupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Group', groupSchema);