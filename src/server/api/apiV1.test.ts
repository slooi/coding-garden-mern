// import request from 'supertest'

// import { app } from '../server'

// describe("GET /api/vi",()=>{
// 	it("responds with json message",async ()=>
// 		request(app)
// 			.get("/api/v1/todos")
// 			.set("Accept","application/json")
// 			.expect("Content-Type",/json/)
// 			.then(res=>{
// 				expect(res.body).toHaveProperty("length")
// 				expect(res.body.length).toBe(1)

// 				expect(res.body[0]).toHaveProperty("content")
// 				expect(res.body[0]).toHaveProperty("done")
// 			})
// 	)
// })