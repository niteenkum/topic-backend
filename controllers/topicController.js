const topic = require('../models/topic');

module.exports.create = function(req, res){
    topic.create({
        userName: req.body.userName,
        topicName: req.body.topicName,
        content: req.body.content,
        percentage: req.body.percentage
    }, function(err, newTopic){
        console.log(req.body);
        if(err){
            console.log('Error in creating a topic');
            return res.status(400).json({
                message: "Topic not created."
            });
        }
        console.log('******', newTopic);
        return res.status(200).json({
            message: "Topic created successfully.",
            topic: newTopic
        });
    });
}

module.exports.get = function(req, res){
    topic.find({userName: (req.body.userName.toLowerCase())}, function(err, topics){
        if(err){
            console.log('Error in fetching topics');
            return res.status(400).json({
                message: "Error in fetching topics."
            });
        }
        return res.status(200).json({
            message: "List of topics",
            topics: topics
        });
    });
}

