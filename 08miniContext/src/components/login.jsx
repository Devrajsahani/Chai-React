import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function login() {
    const[username, setUsername]= useState('')
    const [password,setPassword]= useState('')


    const {user,setUser}=useContext(UserContext)


    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
        console.log(user)

    }
  return (
    <div>
        <h2>Login</h2>
        <input type = 'text' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/> 
        <input type = 'text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder = 'Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login