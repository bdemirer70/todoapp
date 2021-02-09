import React, { useState } from 'react';
import TodoList from './TodoList';


const Form = ({ setInputText, inputText, setTodos, todos, setStatus }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className=" todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option  value="all">all</option>
                    <option  value="completed">completed</option>
                    <option  value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;