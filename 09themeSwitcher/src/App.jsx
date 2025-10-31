import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme.js'
import ThemeBtn from './components/ThemeButton'
import Card from './components/card'

function App() {
  const [themeMode,setThemeMode]=useState('light')
  // variable and the method are written in that form


  const lightTheme=()=>{
    setThemeMode('light')
  }

  const darkTheme=()=>{
    setThemeMode('dark')
  }

  //actual change of the theme is done by the classic javascript only, it does not use the react logic.
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                       
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App;
