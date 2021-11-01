const bcrypt = require('bcryptjs');
const { sign, verify } = require('jsonwebtoken');

const User = require('../../model/User');

const createAccessToken = (user) => {
  return sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
};

const createRefreshToken = (user) => {
  return sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, msg: 'user not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, msg: 'either email or password is invalid' });
    }

    const accessToken = createAccessToken({ id: user._id, email: user.email });
    const refreshToken = createRefreshToken({
      id: user._id,
      email: user.email,
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      path: 'auth/refresh_token',
    });

    return res.status(200).json({ success: true, accessToken });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, msg: 'failed to login user' });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      path: 'auth/refresh_token',
    });

    return res.status(200).json({ success: true, accessToken });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('refreshtoken', {
      path: '/user/refresh_token',
    });
    return res.json({ message: 'logged out' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const refreshToken = (req, res) => {
  try {
    const rf_token = req.cookies.refreshToken;
    if (!rf_token) {
      return res.status(400).json({
        message: 'Please login or register',
      });
    }
    verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: 'please login or register' });
      }
      const accessToken = createAccessToken({ id: user._id });
      res.json({ accessToken });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { login, register, logout, refreshToken };
