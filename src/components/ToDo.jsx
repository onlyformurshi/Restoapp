import React from 'react'
import './ToDo.css'
import { useState, useEffect, useRef } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
function ToDo() {
    const [ToDo, setToDo] = useState('')
    const [ToDos, setToDos] = useState([])
    const [editId, seteditId] = useState(0)
    const AddToDo = () => {
        if (ToDo !== '') {


            setToDos([...ToDos, { id: Date.now(), value: ToDo, status: false }])
            setToDo('')

        }
        if (editId) {

            const editTodo = ToDos.find((toDo) => toDo.id === editId)
            const UpdateTask = ToDos.map((mapvalues) => mapvalues.id === editTodo.id ?(mapvalues ={...mapvalues, value: ToDo}) : (mapvalues = mapvalues))
                
            setToDos(UpdateTask)
            seteditId(0)
        }


    }

    const TodoDone = (id) => {
        let complete = ToDos.map((mapvalues) => {
            if (mapvalues.id === id) {
                return { ...mapvalues, status: !mapvalues.status }
            }
            return mapvalues
        })

        setToDos(complete)
    }
    const todoDelete = (id) => {
        setToDos(ToDos.filter((filtervalue) => filtervalue.id !== id))
    }

    const todoEdit = (id) => {
        const Edit = ToDos.find((toDo) => toDo.id === id)
        setToDo(Edit.value)
        seteditId(Edit.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const inputRef = useRef(null);

    useEffect(() => {

        inputRef.current.focus();
    });
    return (
        <div className='todo-body'>
            <div className="container-todo">
                <h1>To-Do List</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input ref={inputRef} value={ToDo} type="text" onChange={(e) => { setToDo(e.target.value) }} placeholder="Add a new task..." />
                        <button onClick={() => AddToDo()}>{editId ? "Edit" : "Add"}</button>
                    </div>
                </form>
                <ul>
                    {ToDos.map((value, index) => (
                        <li id={value.status ? "completed" : ""} key={index}>{value.value}
                            <span>
                                <IoCheckmarkDoneCircle className='icons' onClick={() => { TodoDone(value.id) }} />
                                <CiEdit onClick={() => {
                                    todoEdit(value.id)
                                }} className='icons' />
                                <MdDelete onClick={() => { todoDelete(value.id) }} className='icons' />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDo
