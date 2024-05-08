const express = require('express');
const multer = require('multer');
const sharp = require('sharp'); // Import sharp for image conversion
const config = require('../config/config');
const { initializeApp } = require('firebase/app');
const {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} = require('firebase/storage');
const Image = require('../models/gallery.model');

const router = express.Router();

// Initialize Firebase
initializeApp(config.firebaseConfig);
// Create a root reference
const storage = getStorage();

// Setting multer as a middleware to grab photo uploads
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // Maximum file size: 10 MB
    },
});

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const dateTime = Date.now();

        // Convert uploaded image to JPEG format
        const convertedImageBuffer = await sharp(req.file.buffer)
            .toFormat('jpeg')
            .toBuffer();

        const storageRef = ref(
            storage,
            `files/${req.file.originalname + ' ' + dateTime}.jpg` // Ensure the file extension is .jpg
        );

        // Create file metadata including the content type
        const metadata = {
            contentType: 'image/jpeg', // Set content type as JPEG
        };

        // Upload the converted image to the bucket storage
        const snapshot = await uploadBytesResumable(
            storageRef,
            convertedImageBuffer, // Use the converted image buffer
            metadata
        );

        // Grab the public url
        const downloadURL = await getDownloadURL(snapshot.ref);

        const newImage = await Image.create({
            title: req.body.title,
            imageUrl: downloadURL,
        });

        console.log('File uploaded successfully!');

        return res.send({
            status: 'success',
            data: {
                image: newImage,
            },
        });
    } catch (err) {
        return res.status(400).send({
            status: 'fail',
            message: err.message,
        });
    }
});

module.exports = router;
