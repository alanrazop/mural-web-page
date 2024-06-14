const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.ObjectId,
            ref: 'Post',
            required: [true, 'Comment must belong to a post.'],
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        user: {
            type: String,
            required: [true, 'Comment must belong to a user.'],
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

commentSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'name',
    });
    next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
