const Group = require("../../models/Group");
const http = require("http");
const { response } = require("express");

module.exports = {

	fetchGroups: async (req, res, next) => {
		try {
			let requiredInputs = ['delta', 'limit']
			requiredInputs.forEach(input => {
				if (!req.query[input]) {
					return res.status(401).json({
						status: {
							message: `${input} not provided`,
							code: 401,
						},
					});
				}
			})
			let limit = parseInt(req.query.limit)
			let delta = parseInt(req.query.delta)

			let groupsArr = await Group.find({ status: 'active' }).skip(delta * limit).limit(limit)
			let groupsToSend = groupsArr.map(group=>{
				return {
					groupId: group._id,
					name: group.name,  
					members: group.members,
					adminId: group.adminId,
					createdAt: group.createdAt,
				}
			})
			 
			return res.status(201).json({
				status: {
					message: "Groups requested",
					code: 201
				},
				data: groupsToSend
			})
		}
		catch (e) {
			console.log('Groups find error:::', e)
			return res.status(404).json({
				status: {
					message: e.message,
					code: 404,
				},
			});
		}
	},
}