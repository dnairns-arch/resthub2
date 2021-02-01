const mongoose = require("mongoose");

// Setup Assessment Schema
var assessmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    assessment_data: { type: String, required: true },
    create_date: { type: Date, default: Date.now }
});

// Export Assessment model
var Assessment = module.exports = mongoose.model('assessment', assessmentSchema);

module.exports.get = function (callback, limit) {
    Assessment.find(callback).limit(limit);
}
