const Image = require('../models/gallery.model');
const config = require('../config/config');
const { initializeApp } = require('firebase/app');
const {
    getStorage,
    ref,
    deleteObject,
    refFromURL,
    storageRef,
} = require('firebase/storage');

// Initialize Firebase
initializeApp(config.firebaseConfig);
// Create a root reference
const storage = getStorage();

exports.getAllImages = async (req, res) => {
    const images = await Image.find();

    try {
        res.status(200).json({
            status: 'success',
            results: images.length,
            data: { images },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        // Tour.findOne({ _id: req.params.id })
        res.status(200).json({
            status: 'success',
            data: {
                image,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.deleteImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);

        if (!image) {
            return res.status(404).json({
                status: 'fail',
                message: 'Image not found',
            });
        }

        // Create a reference to the file in Firebase Storage
        const fileRef = ref(storage, image.imageUrl); // Assuming 'url' is the field where you store the Firebase Storage path

        // Delete the file from Firebase Storage
        await deleteObject(fileRef);

        // Delete the image metadata from the database
        await Image.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
