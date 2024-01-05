import {useState} from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: '1',
    title: 'todo1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo2',
    completed: true,
  },
  {
    id: '3',
    title: 'todo3',
    completed: false,
  },
]
const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <Todos todos={todos}  />
    </div>
  )
}
export default App