const { Router } = require('express');

const authRouter = require('./auth/auth.routes');
const userRouter = require('./user/user.routes');

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;
