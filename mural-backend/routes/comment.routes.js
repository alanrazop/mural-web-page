const express = require('express');
const commentController = require('../controllers/comment.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router({ mergeParams: true });

router.route('/').get(commentController.getAllComments).post(
    // authController.protect,
    commentController.setCommentUserIds,
    commentController.createComment
);

router
    .route('/:id')
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment);

module.exports = router;
