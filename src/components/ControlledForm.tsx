import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent";
import { FormInputType } from "./types";

type ControlledFormProps = {
    children: React.ReactNode,
    handleSubmit: React.Dispatch<React.SetStateAction<FormInputType | null>>
}


const ControlledForm = ({ children, handleSubmit }: ControlledFormProps) => {

    const [name, setName] = useState<string | null>(null)
    const [number, setNumber] = useState<number | null>(null)

    const handleFormSubmit = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {

        event.preventDefault();

        // Combine to Form Input Object  
        const formInput: FormInputType = {}
        if (name) formInput["inputName"] = name;
        if (number) formInput["inputNumber"] = number

        // Submit Form Input 
        handleSubmit(formInput);

        // Reset Form 
        setName(null);
        setNumber(null)
    }


    return (
        <>
            <h3>Controlled Form</h3>
            
            {children}

            <form>
                <input
                    name="inputName"
                    value={name === null ? "" : name}
                    type="text"
                    placeholder="Enter inputName"
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    name="inputNumber"
                    value={number === null ? "" : number}
                    type="number"
                    placeholder="Enter inputNumber"
                    onChange={(event) => setNumber(event.target.valueAsNumber)}
                />

                <ButtonEvent
                    handleClick={(event) => handleFormSubmit(event)}
                >
                    Submit
                </ButtonEvent>

            </form>
        </>
    )
}

export default ControlledForm