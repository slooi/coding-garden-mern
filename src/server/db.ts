import {MongoClient} from "mongodb"
import "dotenv/config"

const {
	MONGO_URI
} = process.env

if (!MONGO_URI){
	throw new Error("ERROR MONGO_URI NOT DEFINED!")
}
export const client = new MongoClient(MONGO_URI)
export const db = client.db()

//  await client.connect()	  // uncomment if db not working