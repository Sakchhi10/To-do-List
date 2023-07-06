import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            if (editIndex === -1) {
                setTasks([...tasks, inputValue]);
                setInputValue('');
                alert('Task added successfully!');
            } else {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = inputValue;
                setTasks(updatedTasks);
                setEditIndex(-1);
                setInputValue('');
                alert('Task updated successfully!');
            }
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index) => {
        const taskToEdit = tasks[index];
        const editedTask = window.prompt('Edit task:', taskToEdit);
        if (editedTask !== null && editedTask.trim() !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editedTask;
            setTasks(updatedTasks);
        }
    };

    return ( <
            div className = "todo-list-container" >
            <
            h1 > To - Do List < /h1>   <
            div className = "input-container" >
            <
            input type = "text"
            value = { inputValue }
            onChange = { handleInputChange }
            placeholder = "" / >
            <
            button onClick = { handleAddTask } > { editIndex === -1 ? '+' : 'Update Task' } < /button> </div >
            <
            ul className = "task-list" > {
                tasks.map((task, index) => ( <
                        li key = { index } > { task } <
                        div className = "button-container" >
                        <
                        button onClick = {
                            () => handleDeleteTask(index)
                        } > Delete < /button> <button onClick = {
                        () => handleEditTask(index)
                    } > Edit < /button> </div >
                    <
                    /li>
                ))
        } <
        /ul>   < /
    div >
);
};

export default TodoList;