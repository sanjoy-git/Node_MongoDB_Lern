const express = require("express");
const userSchema=require("../models/user.model")

const router=express.Router()

router.get("/",(req,res)=>{
    try {
        userSchema.find({name:'Amit'}).select({
            _id:0,
            __v:0,
        }).exec((err,data)=>{
            if(err){
                res.status(500).json({
                    error:"There was a server side error!",
                })
            }
            else{
                res.status(200).json({
                    result:data,
                    message:"User was find Successfully!",
                })
            }
        })
    } catch (error) { 
        console.log(error);
    }
})

router.get("/:id",async(req,res)=>{
    try {
        await userSchema.findById({_id:req.params.id},(err,data)=>{
            if(err){
                res.status(500).json({
                    error:"There was a server side error!",
                })
            }
            else{
                res.status(200).json({
                    result:data,
                    message:"User was find Successfully!",
                })
            }
        })
    } catch (error) {
        console.log(error);
    }

})

// router.get("/get",async(req,res)=>{
//     let data=await userSchema.find({name:'Sanjoy'},{age:0}).then(
//         (items)=>{
//             return items;
//         }
//     )
//     res.send(data);
// })

router.post("/",async(req,res,next)=>{
    try {
        await userSchema.insertMany(req.body,(err)=>{
            if(err){
                res.status(500).json({
                    error:"there was a server side error!",
                });
            }
            else{
                res.status(200).json({
                    error:"User was create successfully!",
                });
            }
        })
    } catch (error) {
        console.log(error);
    }
});

router.put("/:name",async(req,res)=>{
    await userSchema.updateMany({name:req.params.name},{$set:{age:33}},(err)=>{
        if(err){
            res.status(500).json({
                error:"there was a server side error!",
            });
        }
        else{
            res.status(200).json({
                error:"User was update successfully!",
            });
        }
    });
});

router.delete("/:id",async(req,res)=>{
    await userSchema.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.status(200).json({
                error:"There was a server side erroer"
            });
        }
        else{
            res.status(200).json({
                message:"User was delete successfully!",
            });
        }
    });
});


module.exports=router