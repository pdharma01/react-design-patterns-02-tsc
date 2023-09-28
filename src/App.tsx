import { useState } from 'react'
import './App.css'

import SplitScreenContainer from './components/SplitScreenContainer'
import SplitScreenPanel from './components/SplitScreenPanel'



let tempData = [
  {
    "id": 1,
    "name": "Smartphone",
    "price": 499.99,
    "description": "A powerful mobile device with advanced features.",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Laptop",
    "price": 899.99,
    "description": "A versatile and high-performance computing machine.",
    "rating": 2.8
  },
  {
    "id": 3,
    "name": "Smart TV",
    "price": 699.99,
    "description": "A large-screen television with streaming capabilities.",
    "rating": 4.3
  },
  {
    "id": 4,
    "name": "Wireless Earbuds",
    "price": 129.99,
    "description": "Compact earbuds with high-quality audio and wireless convenience.",
    "rating": 4.7
  },
  {
    "id": 5,
    "name": "Tablet",
    "price": 349.99,
    "description": "A portable touchscreen device for entertainment and productivity.",
    "rating": 4.2
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SplitScreenContainer>

      <SplitScreenPanel fr ={3} >
        <h1>Panel1</h1>
      </SplitScreenPanel>

      <SplitScreenPanel fr ={5} >
        <h1>Panel2</h1>
      </SplitScreenPanel>
      
    </SplitScreenContainer>
    </>
  )
}

export default App
