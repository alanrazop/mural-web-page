const express = require('express');
const postController = require('../controllers/post.controller');
const authControlelr = require('../controllers/auth.controller');
const commentRouter = require('./comment.routes');

const { protect, restrictTo } = require('../controllers/auth.controller');

const router = express.Router();

router.use('/:postId/comments', commentRouter);

router
    .route('/')
    // .get(authControlelr.protect, postController.getAllPosts)
    .get(postController.getAllPosts)
    .post(postController.createPost);

router
    .route('/:id')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(protect, restrictTo('admin'), postController.deletePost);

module.exports = router;
