import { Router } from "express";
import { Actor } from "../entities/actor.entity";


const actorRouter = Router();

actorRouter.get("/",async(req , res)=>{
   const relations= await Actor.find({
        relations: ["filmActors"]
    })

    res.json(relations)
})


export default actorRouter;