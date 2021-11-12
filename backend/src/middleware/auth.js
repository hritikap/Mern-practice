const { verify } = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) {
      return res.status(400).json({ message: 'Invalid authentication' });
    }

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: 'ïnvalid authentication',
        });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = auth;
