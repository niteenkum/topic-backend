const mongoose = require('mongoose');

/* Creating a schema for the topics collection. */
const topicSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    topicName: {
        type: String,
        required: true,
    },  
    content: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
        default: 0,
        required: true
    }
}, {
    timestamps: true
});

/* Creating a model for the topics collection. */
const Topic = mongoose.model('topic', topicSchema);

/* Exporting the model to be used in other files. */

module.exports = Topic;