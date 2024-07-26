import React, { useEffect } from 'react'
import './ToDo.css'
import { useState, useRef } from 'react'
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
function ToDo() {
    const [toDo, setToDo] = useState('')
    const [todos, setTodos] = useState([])
    const [editId, seteditId] = useState(0)
    const inputRef = useRef(null);
    useEffect(() => {

        inputRef.current.focus()
    })
    const AddToDo = () => {

        if (toDo !== '') {
            setTodos([...todos, { id: Date.now(), value: toDo, status: false }])
            setToDo('')
        }
        else {
            alert("Please enter a task")
        }

        if (editId) {
            const editTodo = todos.find((todo) => todo.id === editId)
            const updateTask = todos.map((to) => to.id === editTodo.id ? (to = { id: to.id, value: toDo }) : (to = { id: to.id, value: to.value }))
            setTodos(updateTask)
            seteditId(0)
        }
    }

    const todoDelete = (id) => {

        setTodos(todos.filter((todos) => todos.id !== id))
    }

    const todoCompleted = (id) => {

        let complete = todos.map((todos) => {
            if (todos.id === id) {
                return { ...todos, status: !todos.status }
            }
            return todos
        })
        setTodos(complete)
    }


    const todoEdit = (id) => {

        const Edit = todos.find((toDo) => toDo.id === id)

        setToDo(Edit.value)
        seteditId(Edit.id)



    }

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <form onSubmit={(e) => { e.preventDefault() }} >
                <div className="input-container">
                    <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" ref={inputRef} placeholder='Enter task' />
                    <button onClick={() => { AddToDo() }}>{editId ? 'Edit' : 'Add'}</button>
                </div>
            </form>
            <ul>
                {todos.map((todos) => (
                    <li id={todos.status === true ? 'completed' : ''}>{todos.value} <span><IoCheckmarkDoneCircleSharp onClick={() => { todoCompleted(todos.id) }} className='list-item-icons' title="Completed" />
                        <MdDelete className='list-item-icons' onClick={() => { todoDelete(todos.id) }} title="Delete" />
                        <CiEdit onClick={() => { todoEdit(todos.id) }} className='list-item-icons' title="Edit" /> </span> </li>
                ))}
            </ul>


        </div>
    )
}

export default ToDo
