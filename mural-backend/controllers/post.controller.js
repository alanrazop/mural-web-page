const Post = require('../models/post.model');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();

    try {
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: { posts },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getPost = factory.getOne(Post, { path: 'comments' });

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                post: newPost,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            post,
        },
    });
};

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);

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
