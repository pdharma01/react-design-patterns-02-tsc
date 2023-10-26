import { useState, useEffect } from 'react'
import ButtonEvent from '../basicTypes/ButtonEvent'

let renderCount = 0

function UseHooks() {

    renderCount += 1

    const [count, setCount] = useState(0)
    const [useEffectCount, setUseEffectCount] = useState(0)


    useEffect(() => {
        console.log("Hello from UseHook. useEffect run once");
    }, []) //GOTCHA!- Dont forget dependancy array. Dependency prone to infinite loops

    // useEffect(() => {
    //     // incrementCount
    // }, [])


    // type incrementType = {
    //     value: number,
    //     amount: number,
    //     set: React.Dispatch<React.SetStateAction<number>>
    // }
    const incrementCount = (
        value: number,
        amount: number,
        set: React.Dispatch<React.SetStateAction<number>>): void => {
        
        // GOTCHA! - useState batch runs, run as arrowFunc if altering previous state
        
        let prevValue= value
        set((prevValue)=>prevValue + 100);
        set((prevValue)=>prevValue + amount);
    }

    // const incrementCount = (value, amount, set)=>{

    //     set(value + amount)
    //     // return value + amount +set
    // }

    return (
        <div>
            <p>Component renders : {renderCount}</p>


            <ButtonEvent
                handleClick={() => incrementCount(count, 2, setCount)}
                buttonText={`count += ${count}`}
            />





        </div>
    )
}

export default UseHooks