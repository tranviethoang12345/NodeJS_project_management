import jsonwebtoken from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  }
  else {
    req.user = undefined;
    next();
  }
};
