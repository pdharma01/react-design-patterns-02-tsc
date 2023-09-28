import { useState } from 'react'
import './App.css'

import SplitScreenContainer from './components/SplitScreenContainer'
import SplitScreenPanel from './components/SplitScreenPanel'

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
