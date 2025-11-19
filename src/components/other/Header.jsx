import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({user,setUser}) => {

  const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    setUser(null)
  }
  
  return (
        <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{user} 👋</span></h1>
        <button  className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm' onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Header
