import express, {Request,Response,NextFunction} from "express"

const notFound = (req:Request,res:Response,next:NextFunction)=>{
	res.status(404)
	const error = new Error(`Not found at url: ${req.originalUrl}`)
	next(error)
}
const errorHandler = (err:Error,req:Request,res:Response)=>{
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500
	res.status(statusCode)
	res.json({
		message:err.message,
	})
}	



export {notFound,errorHandler}