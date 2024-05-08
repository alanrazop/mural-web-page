const express = require('express');
const {
    getAllImages,
    getImage,
    deleteImage,
} = require('../controllers/image.controller');
const filesController = require('../controllers/files.controller');
const fileParser = require('../utils/multipartParser');

const router = express.Router();

router.route('/').get(getAllImages);
router.route('/', filesController);

router.route('/:id').get(getImage).delete(deleteImage);

module.exports = router;
