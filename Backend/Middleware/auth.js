import jwt from 'jsonwebtoken'
import { User } from '../Model/user.js';
export const Authenticated = async (req,res,next)=>{
  const token = req.header('Auth');
  if (!token) return res.json({message:"Token does not exists : Login First !"})
    const decoded = jwt.verify(token,"@#$$##%%")
    const id = decoded.userId;
    let user = await User.findById(id);
    if (!user) return res.json({message:"User does not exists !! "})
      req.user = user
      next();
    // console.log(decoded)

}