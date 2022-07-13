import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return (
        <div className="c-todo">
            <li className={`c-todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <div className="c-button-group">
                <button onClick={completeHandler} className={`complete-btn ${todo.completed ? "c-green" : ""}`}><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Todo;