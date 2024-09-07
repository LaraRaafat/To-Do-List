import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && newText.trim()) {
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className={todo.completed ? 'completed' : ''}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleEdit}
                />
            ) : (
                <span className="task-text" onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            )}
            <span className="date">{todo.date}</span>
            <span className="buttons-group">
                <button className="edit-btn" onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </span>
        </li>
    );
};

export default TodoItem;
