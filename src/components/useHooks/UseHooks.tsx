import { useState, useEffect } from 'react'
import ButtonEvent from '../basicTypes/ButtonEvent'

let renderCount = 0
const fromMessage = "Hi from UseHooks. "

function UseHooks() {

    renderCount += 1

    const [count, setCount] = useState(0)
    const [count_2, setCount_2] = useState(1000)
    const [useEffectCount, setUseEffectCount] = useState(0)


    useEffect(() => {
        console.log(fromMessage, "first useEffect run once");
    }, []) //GOTCHA!- Dont forget dependancy array. Dependency prone to infinite loops

    useEffect(() => {
        console.log(fromMessage, "useEffectCount change, but no re-render")
        //how to reset useEffect. end life cycle?
    }, [useEffectCount])


    // type incrementType = {
    //     value: number,
    //     amount: number,
    //     set: React.Dispatch<React.SetStateAction<number>>
    // }
    const incrementCount = (
        amount: number,
        set: React.Dispatch<React.SetStateAction<number>>): void => {

        // GOTCHA! - useState batch runs once
        set((prevValue) => prevValue + 100);
        set((prevValue) => prevValue + amount);
    }

    return (
        <div>
            <p>Component renders : {renderCount}</p>


            <ButtonEvent
                handleClick={() => incrementCount(1, setCount)}
                buttonText={`useState count += ${count}`}
            />

            <ButtonEvent
                handleClick={() => incrementCount(5, setUseEffectCount)}
                buttonText={`useEffect count += ${useEffectCount}`}
            />





        </div>
    )
}

export default UseHooks