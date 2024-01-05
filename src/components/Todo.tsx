import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id}:TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompletedTodo({
            id,
            completed: event.target.checked
        })
    }
    return (
        <div>
            <input
                className="toggle"
                checked={completed}
                type="checkbox" 
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button 
                className="destroy" 
                onClick={() => {
                    onRemoveTodo({id})
                }} 
            />   
        </div>
    )
}