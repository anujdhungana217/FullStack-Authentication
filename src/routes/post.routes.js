import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/create",(req,res)=>{
  const token = req.cookies.token;

  if (!token){
    return res.status(401).json({
        Message:"UnAuthorized"
    })
  }
try{
    jwt.verify(token,  process.env.JWT_SECRET,)
}catch(err){
    return res.status(409).json({

        message:"Invalid Token"
    })
}


    res.send("post created Successfullyyyyyyyyyyyyyyyyyyy")
    
});

export default router;
