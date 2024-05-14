const router = require('express').Router();
const blogControl = require('../controller/blogs');

router.route('/')
.get(blogControl.getAll)
.post(blogControl.createBlog)

router.route('/:id')
.get(blogControl.getbyId)
.put(blogControl.updateBlog)
.delete(blogControl.deleteBlog)

module.exports = router;
