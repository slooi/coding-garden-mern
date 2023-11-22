import {Response, Router,Request} from "express"
import { Todo } from "./model_todos"

const router_todos = Router()

router_todos.get("/",(req:Request,res:Response<Todo[]>)=>{
	res.json([{
		content:"learn typescript",
		done: false
	}])
})

export {router_todos}