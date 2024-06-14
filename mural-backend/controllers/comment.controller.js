const Comment = require('../models/comment.model');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllComments = catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.postId) filter = { postId: req.params.postId };

    const comments = await Comment.find(filter);

    res.status(200).json({
        status: 'success',
        results: comments.length,
        data: {
            comments,
        },
    });
});

exports.setCommentUserIds = (req, res, next) => {
    //Allow nested routes
    if (!req.body.post) req.body.post = req.params.postId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
};

exports.createComment = factory.createOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
