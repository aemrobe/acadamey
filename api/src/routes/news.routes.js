const express = require('express');
const multer = require('multer');
const newsController = require('./../controllers/news.controller');

//  Setup
const router = express.Router();
const multerStorage = multer.diskStorage({ 
    destination: (req, file, next) => {
        next(null, "assets/news")
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

router.get('/', newsController.getNews);
router.post('/', upload.single('image'), newsController.createNews);
router.get('/recent', newsController.recentNews);
router.put('/:id', newsController.updateNews);

module.exports = router;