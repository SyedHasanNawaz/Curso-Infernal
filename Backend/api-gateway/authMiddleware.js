const jwt = require('jsonwebtoken');
const JWT = process.env.JWT_SECRET || 'supersecret123';

const requireAuthorization = (req, res, next) => {
  const head = req.headers.authorization;

  if (!head || !head.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Token not found" });
  }

  const token = head.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

const requireAuthentication = (req, res, next) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "Not Authenticated" });
  }
  next();
};

module.exports = {
  requireAuthorization,
  requireAuthentication
};
