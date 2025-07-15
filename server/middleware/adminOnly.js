// server/middleware/adminOnly.js
module.exports = function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Admins only' });
  }
  next();
};
