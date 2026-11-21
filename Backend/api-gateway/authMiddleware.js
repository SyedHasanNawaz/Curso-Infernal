const jwt = require('jsonwebtoken');
const JWT = process.env.JWT_SECRET || 'supersecret123';

const requireAuthorization = (req, res, next) => {
  const head = req.headers.authorization;
  if (!head || !head.startsWith('Bearer ')) {
    res.status(401).json({ error: "Token not found" });
    return;
  }
  const token = head.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
    return;
  }
};

const requireAuthentication = (req, res, next) => {
  if (!req.user || !req.user.id) {
    res.status(401).json({ error: "Not Authenticated" });
    return;
  }
  next();
};

module.exports = {
  requireAuthorization,
  requireAuthentication
};
