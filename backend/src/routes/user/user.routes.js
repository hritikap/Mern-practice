const { Router } = require('express');
const auth = require('../../middleware/auth');
const { getUsers, getLoggedInUser } = require('./user.controller');

const router = Router();

router.get('/me', auth, getLoggedInUser);
router.get('/', getUsers);

module.exports = router;
