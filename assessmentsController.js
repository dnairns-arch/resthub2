var router = require("express").Router();

// Import assessment model
Assessment = require('./assessmentModel');

// Handle Index actions
exports.index = function (req, res) {
    Assessment.get(function (err, assessments) {
        if (err) {
            res.json({
                status:"error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Assessments retrieved successfully.",
            data: assessments
        });
    });    
};


// Assessment creation actions handler
exports.new = function (req, res) {
    var assessment = new Assessment();
    assessment.name = req.body.name ? req.body.name : assessment.name;
    assessment.assessment_data = req.body.assessment_data;
    
    // Save the assessment and perform error checking
    assessment.save(function (err){
        if (err)
            res.json(err);
        else
            res.json({
                message: "New Assessment created!",
                data: assessment
            });
    });
};

// Assessment view handler
exports.view = function (req,res) {
    Assessment.findById(req.params.assessment_id, function (err, assessment) {
        if (err)
            res.send(err);
        res.json({
            message: "Assessment details lodaing..",
            data: assessment
        });
    });
};

// Assessment update/change handler
exports.update = function (req,res) {
    Assessment.findById(req.params.assessment_id, function(err, assessment) {
        if (err)
            res.send(err);
        assessment.name = req.body.name ? req.body.name : assessment.name;
        assessment.assessment_data = req.body.assessment_data;
        assessment.save(function(err) {
            if (err)
                res.json(err);
            res.json({
                message: "Assessment Updated",
                data: assessment
            });
        });
    });
};

// Assessment deltion handler
exports.delete = function (req, res) {
    Assessment.remove({
        _id: req.params.assessment_id
    }, function (err, assessment){
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message : "Assessment deleted"
        });
    });
};

