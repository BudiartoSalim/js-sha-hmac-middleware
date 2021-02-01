const crypto = require('crypto');

function hmacSha256Auth(request, response, next) {
  const secret = process.env.SIGNING_SECRET;
  const hash = crypto.createHmac('SHA256', secret).update(JSON.stringify(request.body)).digest('hex');

  if (request.headers.signature === hash) {
    next();

  } else {
    response.status(401).json({ message: 'Unauthorized.' })
  }
}

module.exports = hmacSha256Auth;