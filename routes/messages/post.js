const Group = require("../../models/Group"); 
const Message = require("../../models/Message"); 
const http = require("http"); 
const { response } = require("express");
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

// const jwt = require("jsonwebtoken");

module.exports = {

  createMessage: async (req, res, next) => {
    try { 
      // necessary input validation
      let requiredInputs = ['msg']
      requiredInputs.forEach(input => {
        if (!req.body[input]) {
          return res.status(401).json({
            status: {
              message: `${input} not provided`,
              code: 401,
            },
          });
        }
      }) 
      // 
      if(!(req.body.groupId || req.body.recId)){
        return res.status(401).json({
          status: {
            message: `Specify either a groupId or a recId`,
            code: 401,
          },
        }); 
      }

      let senderId= req.userData.userId

      let msgCreatedobj
      if(req.body.groupId){
        let groupId = req.body.groupId
        msgCreatedobj = await Message.create({msg: req.body.msg, type: 'group', groupId, senderId })
      } else if(req.body.recId){
        let recId = req.body.recId
        msgCreatedobj = await Message.create({msg: req.body.msg, type: 'direct', recId, senderId }) 
      }
 
      if (msgCreatedobj && msgCreatedobj._id) { 
        let data = {
          msgId: msgCreatedobj._id,
          msg: msgCreatedobj.msg, 
          type: msgCreatedobj.type,  
        }
        msgCreatedobj.groupId? data['groupId']= msgCreatedobj.groupId : ''
        msgCreatedobj.recId? data['recId']= msgCreatedobj.recId : ''

        return res.status(200).json({
          status: {
            message: "Message sent",
            code: 200
          },
          data
        })
      }
      else {
        return res.status(401).json({
          status: {
            message: 'Message not sent',
            code: 401,
          },
        });
      }
    }
    catch (e) {
      console.log('Message Sending error:::', e)
      return res.status(500).json({
        status: {
          message: e.message,
          code: e.code,
        },
      });
    }
  } 
};


