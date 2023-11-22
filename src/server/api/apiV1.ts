import express from "express";
import { router_todos } from "./todos/route_todos";
// import router_todos

const router_apiV1 = express.Router()

// TESTING
// router_apiV1.get("/api/v1",(req,res)=>{
// 	res.status(200).json({"content":"asd"})
// })
router_apiV1.use("/api/v1",router_todos)

export {router_apiV1}