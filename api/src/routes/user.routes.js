const express = require('express');
const multer = require('multer');
const userController = require('../controllers/user.controller');

// Setup
const router = express.Router();
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

// Routes

router.get("/", userController.getUsers);
router.post("/", upload.single('image'), userController.createUser);
router.post("/login", userController.login);

module.exports = router;