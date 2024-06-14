const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        user: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// Virtual populate
postSchema.virtual('comments', {
    ref: 'Comment',
    foreignField: 'post',
    localField: '_id',
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
