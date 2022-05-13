const router = require('express').Router();
const { Comments } = require('../../models/');
const withAuth = require('../../utils/auth');

// POST: User can enter a post comment, creator username, and date created and click on the submit button
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
