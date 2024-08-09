import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">
      <Header />
      <div className="xl:w-10/12 w-11/12 mx-auto min-h-[calc(100vh_-_64px)] lg:h-screen flex items-center">
      <div>
      <h1>Antonio Estrada</h1>
      </div>
      <div className="grid grid-rows-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </div>
  )
}

export default App
