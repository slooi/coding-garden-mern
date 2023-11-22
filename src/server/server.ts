import express from "express"
import cors from "cors"
import { errorHandler, notFound } from "./middlewares"

const PORT = 3000
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

// Middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(PORT,()=>{console.log("Listening on port "+PORT)})