// assessmentRoutes.js

// initialize express router
let router = require('express').Router();

// import assessment controller
var assessmentsController = require('./assessmentsController');

 // Assessment routes
 router.route('/assessments')
    .get(assessmentsController.index)
    .post(assessmentsController.new);

router.route('/assessments/:assessment_id')
    .get(assessmentsController.view)
    .patch(assessmentsController.update)
    .put(assessmentsController.update)
    .delete(assessmentsController.delete);

module.exports = router;