import express from "express"
import cors from "cors"
import { errorHandler, notFound } from "./middlewares"
import { router_apiV1 } from "./api/apiV1"


const app = express()

// Middlewares
app.use(cors())
app.use(express.json())


// Routes
app.get("/",(req,res)=>{
	console.log(
		"asd"
	)
	res.send("asd")
})

app.use(router_apiV1)

// Middlewares
app.use(notFound)
app.use(errorHandler)


export {app}