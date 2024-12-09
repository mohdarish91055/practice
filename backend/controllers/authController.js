import User from '../models/userModel.js';

export const userRegisteration = async (req,res)=>{
    const {name,email,mob_no,password,address} = req.body;
    try{
        const existUser = User.findOne({email});
        if(existUser){
            return res.status(400).send({
                message:"User already registered",
            })
        }
        const user = User({
            name,
            email,
            mob_no,
            password,
            address,
        })
        await user.save();
        res.status(201).send({
            message:'New User Registered',
            user,
        })
    }
    catch(error){
        console.log(error,"registeration");
        res.status(500).send({
            message:'Something went wrong',
        })
    }
}

export const userLogin = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = User.findOne({email});

        //user in not exist then
        
        
        res.status(200).send({
            message:'Login successfully',
        })    
    }
    catch(error){
        console.log(error,"login");
        res.status(500).send({
            message:'Something went wrong',
        })   
    }
}