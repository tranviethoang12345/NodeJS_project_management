// import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken'
import { User } from './user.model.js';
import generateJWT from '../../untils/generateToken.js';

export const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({ message: err })
        } 
            user.hashPassword = undefined;
            return res.json(user);
        
    });
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({ message: 'Authentication failed. No user found' });
        } else if (user) {
            if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({ message: 'Authentication failed. Wrong password' });
            } else {
                return res.json(generateJWT());
            }
        }
    } catch (error) {
        res.json(error);
    }
}

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
}


// export const login = (req,res) => {
//     User.findOne({
//         email: req.body.email
//     }, (err, user) => {
//         if (err) throw err;
//         if (!user) {
//             res.status(401).json({ message: 'Authentication failed. No user found'})
//         } else if (user) {
//             if (!user.comparePassword(req.body.password, user.hashPassword)) {
//                 res.status(401).json({ message: 'Authentication failed. Wrong password'})
//             } else {
//                 return res.json({token: jwt.sign({ email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')})
//             }
//         }
//     })
// }


