const Group = require("../../models/Group"); 
const http = require("http"); 
const { response } = require("express");
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

// const jwt = require("jsonwebtoken");

module.exports = {

  createGroup: async (req, res, next) => {
    try {
      // necessary input validation
      let requiredInputs = ['name']
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
      let existingGroup = await Group.find({ name: req.body.name, status: 'active' })
      if (existingGroup.length > 0) {
        return res.status(401).json({
          status: {
            message: 'This Group already Exists. Pick a new one!',
            code: 401,
          },
        });
      } 
      
      let groupCreatedObj = await Group.create({ name: req.body.name, adminId: req.userData.userId, status: 'active'}) 


      if (groupCreatedObj && groupCreatedObj._id) { 
        return res.status(200).json({
          status: {
            message: "Group Creation successful",
            code: 200
          },
          data: {
            groupId: groupCreatedObj._id,
            adminId: groupCreatedObj.adminId,
            name: groupCreatedObj.name, 
            members: groupCreatedObj.members,
            status: groupCreatedObj.status, 
          }
        })
      }
      else {
        return res.status(401).json({
          status: {
            message: 'Group not created',
            code: 401,
          },
        });
      }
    }
    catch (e) {
      console.log('Group Creation error:::', e)
      return res.status(500).json({
        status: {
          message: e.message,
          code: e.code,
        },
      });
    }
  } 
};


