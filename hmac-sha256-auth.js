const crypto = require('crypto');

function hmacSha256Auth(req, res, next) {
  const secret = process.env.SIGNING_SECRET;
  const hash = crypto.createHmac('SHA256', secret).update(JSON.stringify(req.body)).digest('hex');

  if (req.headers.signature === hash) {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized.' })
  }
}

module.exports = hmacSha256Auth;