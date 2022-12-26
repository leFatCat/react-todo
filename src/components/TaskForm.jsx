import {useState,useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

export function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        createTask({Title:title,Description:description})
        setDescription('')
        setTitle('')
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
            <input 
            className='border p-3 outline-0 bg-slate-300 w-full mb-2'
            type="text" 
            placeholder="Empresa de desarrollo web" 
            onChange={(e) => { 
               setTitle(e.target.value)
            }} 
            value={title}
            autoFocus/>
            <textarea placeholder='Descripción de la tarea' className='border p-3 outline-0 bg-slate-300 w-full mb-2'
            onChange={(e)=>{
                setDescription(e.target.value)
            }} 
            value={description}/>
            <button
            className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
        </form>
        </div>
    );
}
