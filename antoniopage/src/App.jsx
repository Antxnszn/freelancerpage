import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import GitHublogo from './icons/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ color: '#1A1616' }} className="font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark leading-base">

      <div className="flex flex-col lg:flex-row items-center justify-left lg:space-x-8">
        <div>
          <Header />
        </div>
        <body className="bg-transparent">
          <p className="text-3xl font-light text-center">Welcome to my <span className="font- text-center">personal page</span>!</p>
          <GitHublogo />
        </body>
      </div>
      
      <footer>
        <p>Made with ❤️ by Antonio</p>
      </footer>
    </div>
  )
}

export default App
