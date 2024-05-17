const express = require('express');
const postController = require('../controllers/post.controller');
const authControlelr = require('../controllers/auth.controller');

const { protect, restrictTo } = require('../controllers/auth.controller');

const router = express.Router();

router
    .route('/')
    // .get(authControlelr.protect, postController.getAllPosts)
    .get(postController.getAllPosts)
    .post(postController.createPost);

router
    .route('/:id')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(
        protect,
        restrictTo('user', 'lead-guide'),
        postController.deletePost
    );

module.exports = router;
