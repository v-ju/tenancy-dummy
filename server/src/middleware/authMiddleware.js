import jwt from 'jsonwebtoken';

import 'dotenv/config'

export const authenticate = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        
        return res.status(401).json({message:'Unauthorized request'});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_PASS);
        req.user = decoded;
        next();
    } catch(e){
       return res.status(403).json({message: `Forbidden:${e}`});
    }
}

    
export const authorizeRoles = (roles=[]) => {
    return (req, res, next) => {
        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({message: "Access Denied!"})
        }
        next();
    };
};
