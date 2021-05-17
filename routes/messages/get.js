const Group = require("../../models/Group");
const Message = require("../../models/Message");
const http = require("http");
const { response } = require("express");

module.exports = {

	fetchMessages: async (req, res, next) => {
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

			if (!(req.query.groupId || req.query.senderId)) {
				return res.status(401).json({
					status: {
						message: `Specify either a groupId or a recId`,
						code: 401,
					},
				});
			}

			let msgFoundArr
			if (req.query.groupId) {
				let groupId = req.query.groupId
				msgFoundArr = await Message.find({ type: 'group', groupId, status: 'active' }).sort(-1).skip(delta * limit).limit(limit)

			} else if (req.query.senderId) {
				let senderId = req.query.senderId
				msgFoundArr = await Message.find({ type: 'group', senderId, status: 'active' }).sort(-1).skip(delta * limit).limit(limit)
			}

			let msgsToSend = msgFoundArr.map(msg => {
				let entry = {
					msgId: msg._id,
					msg: msg.msg,
					type: msg.type,
					senderId: msg.senderId
				}
				msg.groupId ? entry['groupId'] = msg.groupId : ''
				return entry
			})

			return res.status(201).json({
				status: {
					message: "Messages requested",
					code: 201
				},
				data: msgsToSend
			})
		}
		catch (e) {
			console.log('Messages find error:::', e)
			return res.status(404).json({
				status: {
					message: e.message,
					code: 404,
				},
			});
		}
	},
}