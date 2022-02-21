import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')
    };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
     {props.edit ? ( 
        <>
        <input 
        type="text" 
        placeholder="Update this" 
        value={input}
        name="text" 
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef} 
        />
        <button className="todo-button edit">Change it</button>
        </>
    ) : (
        <>
        <input 
        type="text" 
        placeholder="Things to buy or do" 
        value={input}
        name="text" 
        className="todo-input"
        onChange={handleChange}
        ref={inputRef} 
    />
    <button className="todo-button">Put it in</button>
    </>
    )} 
    </form>
  );
}

export default TodoForm