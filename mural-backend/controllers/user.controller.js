const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();

    try {
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: { users },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        // Tour.findOne({ _id: req.params.id })
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }
};

exports.updateUser = async (req, res) => {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

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
