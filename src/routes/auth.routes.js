import express from "express"
import authController from "../controllers/auth.controller.js"


const router= express.Router()

router.post("/register",authController.registerUser)

router.get("/test",(req,res)=>{
    const cookie=req.cookies
    console.log(cookie);

    res.status(201).json({
        message:"Cookie Received Successfull",
        cookie
    })
    
})

export default router