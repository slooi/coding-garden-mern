import {Response, Router,Request} from "express"
import { Todo, Todos } from "./model_todos"

const router_todos = Router()

router_todos.get("/todos",async (req:Request,res:Response<Todo[]>)=>{
	const results = await Todos.find()
	const todos = await results.toArray()
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	console.log(todos)
	res.json([{
		content:"learn typescript",
		done: false
	}])
})

export {router_todos}