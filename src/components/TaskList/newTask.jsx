import React from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react';

const NewTask = ({data,id,idx}) => {
    const [userData,setUserData]=useContext(AuthContext);
    const accept=(e)=>{
        console.log(idx)
        const arr=[...userData]
    
        arr.forEach(function (elem) {
            if (id == elem.id) {
               elem.taskCounts.newTask=elem.taskCounts.newTask-1;
               elem.taskCounts.active=elem.taskCounts.active+1;
               elem.tasks[idx].active=true;
               elem.tasks[idx].newTask=false;
            }
        })

        localStorage.setItem('employees',JSON.stringify(arr))
        setUserData(arr)
    }
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs' onClick={accept}>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask