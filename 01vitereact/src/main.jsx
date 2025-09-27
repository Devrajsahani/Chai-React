import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'



function MyApp(){
  return (
    <div>
      <h1>Chai aur React</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target = '_blank'>Visit Google </a>
)

const anotherElement = "Chai and react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to Visit Google',
  anotherElement,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)