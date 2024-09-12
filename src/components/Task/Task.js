import './task.css'
import { IoClose } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { useState } from 'react';



export default function Task({task, taskDelete,index}){
    
    const [newtask, setNewTask] = useState("");
    
    
    
    return(
        <div className='bg-white flex flex-row justify-between p-5 rounded-2xl text-xl font-semibold task_cont'>
            
            <div className='flex flex-row justify-center items-center'>
                
            <div class="wrap-check-29 mr-4">
                <div class="cbx">
                    <input id="cbx-29" type="checkbox"/>
                    <label for="cbx-29"></label>
                    <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                    </svg>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                    <filter id="goo-12">
                        <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
                        <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
                        <feblend in="SourceGraphic" in2="goo-12"></feblend>
                    </filter>
                    </defs>
                </svg>
            </div>
                
                <div className='flex flex-col'>  
                    <h1 className= 'capitalize'>{task}</h1>
                </div>
                
            </div>
            
            
            <div className='flex justify-center items-center'>
                
                <button onClick={() => taskDelete(index)} className='ml-3' title='Close'>
                    <IoClose className='text-3xl close_icon hover:scale-125 duration-300'/>
                </button>
                
            </div>
        </div>
    )
}