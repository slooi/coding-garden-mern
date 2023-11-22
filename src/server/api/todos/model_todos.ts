import z from 'zod'


const Todo = z.object({
	content:z.string(),
	done:z.boolean().default(false)
})
type Todo = z.infer<typeof Todo>


const result = Todo.parse("")

export {Todo}