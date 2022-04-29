const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "most provide name"],
        trim: true,
        maxlenght: [20, "name cannot be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);