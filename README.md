# js-sha-hmac-middleware
Simple Middleware function for expressJs that can be used to compare hash using HMAC-SHA256 algorithm

This sample parses and create a hash from the stringified request.body then comparing it to a "signature" property in request.headers

# How to use
Put it as middleware on any express routes you want to have the HMAC-SHA256 hash signature auth, then change the request.headers.signature to whatever the signature in header is named (for example, request.headers.authSignature)

You can modify what's being hashed as well by editing the part in .update()
