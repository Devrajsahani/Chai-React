import UserContextProvider from './Context/UserContextProvider.jsx'
import React from 'react'
import login from './components/login.jsx'
import profile from './components/profile.jsx'
import './App.css'

function App() {
  return (
      <UserContextProvider>
        <h1>Context API</h1>
        <login/>
        <profile/>
      </UserContextProvider>
    
  )
}

export default App
