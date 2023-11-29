
import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent"

const SimpleForm = () => {

    const [textInput, setTextInput] = useState<string>("");
    const [numberInput, setNumberInput] = useState<number>(0)

    const handleSubmit = (
        event: React.MouseEvent<HTMLButtonElement>,
        id?: string
    ) => {

        event.preventDefault();

        // Log input 
        console.log(id, typeof textInput,
            ":",
            textInput, typeof numberInput,
            ":",
            numberInput);

        // Reset Form 
        setTextInput("");
        setNumberInput(0)

    }



    // Change Event is always string 
    // function handleChangeEventString(
    //     event: React.ChangeEvent<HTMLInputElement>, // THis event is always STRING!
    //     set: React.Dispatch<React.SetStateAction<string>>
    // ) {
    //     set(event.target.value)
    // }

    // Only pass value as generic string or number 
    function handleChangeValue<T>(
        value: T,
        set: React.Dispatch<React.SetStateAction<T>> //Type for setState function
    ) {
        set(value)
    }


    return (

        <div className="section">
            <h4>Simple Form</h4>
            <p>With event change and submit</p>
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
                handleClick={handleSubmit}>
                <p>Submit Form (text and num input)</p>
            </ButtonEvent>

        </form>
        </div>
    )
}

export default SimpleForm