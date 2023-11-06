import { useState, useEffect } from 'react'
import ButtonEvent from '../basicTypes/ButtonEvent'

let renderCount = 0
const fromMessage = "Hi from UseHooks. "

function UseHooks() {

    // useRef 
    // useMemo
    // useCallback 
    //useEffect- create full componentent life cycle
    
    renderCount += 1

    const [count, setCount] = useState(0)
    const [useEffectCount, setUseEffectCount] = useState(0)


    useEffect(() => {
        console.log(fromMessage, "first useEffect run once");
    }, []) //GOTCHA!- Dependancy array

    useEffect(() => {
        console.log(fromMessage, "useEffectCount change, but no re-render")
        //how to reset useEffect. end life cycle?
    }, [useEffectCount])


    const incrementCount = (
        amount: number,
        set: React.Dispatch<React.SetStateAction<number>>): void => {

        // GOTCHA! - useState batch runs
        set((prevValue) => prevValue + 100);
        set((prevValue) => prevValue + amount);
    }

    return (
        <div>
            <p>Component renders : {renderCount}</p>

            <ButtonEvent
                handleClick={() => incrementCount(1, setCount)}>
                <p>useState count += {count}</p>
            </ButtonEvent>

            <ButtonEvent
                handleClick={() => incrementCount(5, setUseEffectCount)}>
                <p>useEffect count += {useEffectCount}</p>
            </ButtonEvent>

        </div>
    )
}

export default UseHooks