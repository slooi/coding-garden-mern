import express from "express";
import { router_todos } from "./todos/route_todos";
// import router_todos

const router = express.Router()

// router.use("")
router.use("todos",router_todos)

export {router}