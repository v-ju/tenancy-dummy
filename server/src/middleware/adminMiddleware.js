import jwt from 'jsonwebtoken';
import 'dotenv/config';
export const adminMiddelware = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        
        return res.status(500).json({message:'Unauthorized request'});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_PASS);
        req.userId = decoded.userId;
        req.role = decoded.role;

        if(req.role != 'admin'){
            return res.status(403).json({message: 'Unauthorized user.'})
        }
        next();
    } catch(e){
       return res.status(400).json({error: e});
    }

}