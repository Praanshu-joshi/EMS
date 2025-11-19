import React from 'react'
import { useEffect,useState,useContext} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/employeeDashboard'
import AdminDashboard from './components/DashBoard/adminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user,setUser]=useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  
  // keep login based on past login data from local storage

  useEffect(()=>{
    const prev=localStorage.getItem('loggedInUser')
    if(prev){
       const {role,data}=JSON.parse(prev)
       setUser(role);
       setLoggedInUserData(data)
    }
  },[])




 //handle login function to check which user  is logged in

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
        setUser('admin');
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
      }
      else{
        const employee=userData.find((e)=>{
          return(e.email==email && e.password==password)
        })
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
        else{
          alert('invalid credentials')
        }
      }
  }





  //conditional rendering -> 
if(!user){
  return(<Login handleLogin={handleLogin}></Login>)
}
else if (user=='admin'){
  return (<AdminDashboard setUser={setUser}></AdminDashboard>)
}
else {
  return(<EmployeeDashboard data={loggedInUserData} setUser={setUser}></EmployeeDashboard>)
}



}

export default App
