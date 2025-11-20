import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AcceptTask = ({data,id,idx}) => {
    const [userData,setUserData]=useContext(AuthContext)
   

    const complete=()=>{
        
         const arr=[...userData]
         arr.forEach(function (elem) {
            if (id == elem.id) {
                console.log(elem.taskCounts.completed)
               elem.taskCounts.completed=elem.taskCounts.completed+1;
               elem.taskCounts.active=elem.taskCounts.active-1;
               elem.tasks[idx].active=false;
               elem.tasks[idx].completed=true;
            }
        })

        localStorage.setItem('employees',JSON.stringify(arr))
        setUserData(arr)

    }

    const failed=()=>{

         const arr=[...userData]
         arr.forEach(function (elem) {
            if (id == elem.id) {
               elem.taskCounts.failed=elem.taskCounts.failed+1;
               elem.taskCounts.active=elem.taskCounts.active-1;
               elem.tasks[idx].active=false;
               elem.tasks[idx].failed=true;
            }
        })

        localStorage.setItem('employees',JSON.stringify(arr))
        setUserData(arr)


    }
  return (
    <div className='shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs' onClick={complete}>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs' onClick={failed}>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask