import movieSchema from './models/r_movie.model.js'
import userschema from './models/user.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
const {sign} = pkg



export async function addMovie(req,res) {

    console.log(req.body);

    const{...datas}=req.body

    await movieSchema.create({...datas}).then(()=>{
        res.status(201).send({msg:"Successfull"})
    }).catch((error)=>{
        res.status(404).send({error:error})
    })  
    
}

export async function getMovies(req, res) {
    console.log("get employee");

    const data = await movieSchema.find();
    console.log(data);
    res.status(200).send(data); 
}

export async function getMovie(req,res) {
    console.log(req.params);
    const {id}=req.params;
    const data=await movieSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
    
}

export async function update(req,res) {
    console.log(req.params);
    console.log(req.body);
    const {...data}=req.body
    await movieSchema.updateOne({_id:req.params.id},{$set:{...data}}).then(()=>{
        res.status(201).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({error:error})
        
    })
    
    
    
}

export async function deleteemp(req, res) {
    console.log(req.params); 
    const { id } = req.params;  
    const data = await movieSchema.deleteOne({ _id: id })
        .then(() => {
            res.status(201).send({ msg: "Deleted" });
        })
        .catch((error) => {
            res.status(500).send({ error });
        });
}




export async function adduser(req,res) {
    console.log(req.body);
    const {username,emailphone,password,confirmpassword}=req.body
    if(!(username&&emailphone&&password&&confirmpassword))
        return res.status(400).send({msg:"invalid input"})
    else if(password!=confirmpassword)
        return res.status(400).send({msg:"password missmatch"})

    bcrypt.hash(password,10).then((hpwd)=>{
        console.log(hpwd)
        console.log("data added");
        userschema.create({username,emailphone,password:hpwd}).then(()=>{
            res.status(201).send({msg:"Successfull"})
        }).catch((error)=>{
            res.status(404).send({error:error})
        }) 
        
    }).catch((error)=>{
        console.log(error)
        
    })
    
}


export async function login(req,res) {
    console.log(req.body);
    const {emailphone,password}=req.body;

    if (!(emailphone&&password))
        return res.status(500).send({msg:"feilds are empty"})
    const user= await userschema.findOne({emailphone})

    if (!user) 
        return res.status(500).send({msg:"user not exits"})
    console.log(user.password);
    
    const success = await bcrypt.compare(password,user.password)
    console.log(success);
    if (success !==true)
        return res.status(500).send({msg: "user or password not exits"})
    const token = await sign({UserID:user._id},process.env.JWT_KEY,{expiresIn:"24h"})
    res.status(200).send(token)
     
        
    
    
    
}







