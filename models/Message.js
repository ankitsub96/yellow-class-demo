const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const messageSchema = mongoose.Schema({
   msg: {type: String, required: true},  
   type: {type: String, required: true}, //group or direct
   groupId: {type: mongoose.Schema.Types.ObjectId}, //for group msg
   recId: {type: mongoose.Schema.Types.ObjectId}, //for direct msg 
   senderId: {type: mongoose.Schema.Types.ObjectId, required: true},
   status: {type: String, required: true, default: "active"}, 
},{ timestamps: true });

messageSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Message', messageSchema);