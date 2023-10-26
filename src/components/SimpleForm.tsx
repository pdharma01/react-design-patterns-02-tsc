
import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent"

const SimpleForm = () => {

    const [textInput, setTextInput] = useState<string>("");
    const [numberInput, setNumberInput] = useState<number>(0)


    const handleSubmit = (
        event: React.MouseEvent<HTMLButtonElement>,
        id?: string) => {
        event.preventDefault();
        console.log(id, typeof textInput, textInput, typeof numberInput, numberInput);
        console.log(event);
        setTextInput("");
        setNumberInput(0)

    }



    // Change Event is always string 
    function handleChangeEvent(
        event: React.ChangeEvent<HTMLInputElement>, // THis event is always STRING!
        set: React.Dispatch<React.SetStateAction<string>>
    ) {
        set(event.target.value)
    }

    function handleChangeValue<T>(
        value: T,
        set: React.Dispatch<React.SetStateAction<T>>
    ) {
        set(value)
    }


    return (
        <form>
            <input

                value={textInput}
                type="text"
                placeholder="Input text"
                onChange={(e) => handleChangeValue<string>(e.target.value, setTextInput)}

            //Using React.ChangeEvent always turns event.target.value to string
            // onChange={(event) => handleChangeEvent(event, setTextInput)} 

            />

            <input
                value={numberInput}
                type="number"
                placeholder="Input number"
                onChange={(e) => handleChangeValue<number>(e.target.valueAsNumber, setNumberInput)}
            />
            <ButtonEvent
                handleClick={handleSubmit} />

        </form>
    )
}

export default SimpleForm