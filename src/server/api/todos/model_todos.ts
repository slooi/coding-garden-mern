import z from 'zod'

import {db} from "../../db"
import { WithId } from 'mongodb'

const Todo = z.object({
	content:z.string(),
	done:z.boolean().default(false)
})
type Todo = z.infer<typeof Todo>


// const result = Todo.parse("")

export {Todo}
export const Todos = db.collection<Todo>("todos")
export type TodoWithId = WithId<Todo>