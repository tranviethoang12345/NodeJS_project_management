import jwt from 'jsonwebtoken';

export const generateJWT = () => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    _id: user.id,
    email: user.email,
    username: user.username,
    exp: parseInt(exp.getTime() / 1000),
  }, 'RESTFULAPIs');
};



