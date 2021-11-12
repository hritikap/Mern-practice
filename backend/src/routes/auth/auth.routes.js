const { Router } = require('express');

const { login, register, refreshToken } = require('./auth.controller');

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/refreshToken', refreshToken);

module.exports = router;
