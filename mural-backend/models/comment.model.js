const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    user: {
        username: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        avatar: {
            type: String,
            required: false,
        },
    },
    content: {
        type: String,
        required: true,
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
