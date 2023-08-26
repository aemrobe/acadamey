const express = require('express');
const multer = require('multer');
const coachController = require('../controllers/coach.controller')

//  Setup
const multerStorage = multer.diskStorage({ 
    destination: (req, file, next) => {
        next(null, "assets/avatar")
    },
    filename:(req, file, next) => {
        const ext = file.mimetype.split("/")[1];
        console.log(file)
        next(null, `${Date.now()}.${ext}`);
    }
});

const upload = multer({
    storage: multerStorage
})

const router = express.Router()

// Endpoints
router.get('/', coachController.getCoaches);
router.post('/',upload.single('image'), coachController.createCoach);



module.exports = router;