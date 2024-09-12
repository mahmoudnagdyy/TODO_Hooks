import { useState } from 'react'
import './form.css'


export default function Form({inputHandler}){
    
    const [task, setTask] = useState("")
    
    const onClickHandler = () => {
        inputHandler({task})
        setTask("")
    }
    
    
    return(
        <div className='flex flex-row justify-center items-center flex-wrap ml-auto mr-auto mt-44 bg-white form_cont p-10 rounded-2xl'>
            
            <div className="wrap-input-9 flex-1">
                <input className="input" type="text" placeholder="Add Task" value={task} onChange={(e)=> setTask(e.target.value)}  />
                <span className="focus-border">
                <i></i>
                </span>
            </div>
            
            <button className="btn-39 ml-10" onClick={onClickHandler}>
                <span className="new">+</span>
                <span className="old">Add</span>
            </button>

        
        </div>
    )
}