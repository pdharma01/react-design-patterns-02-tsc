import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent"
import { ProductType, UserType } from "./types"


// Input Field 
type InputFieldComponentProps = {
    state: string | number,
    setState: (eventValue: string | number) => void
}

function InputFieldComponent({
    state,
    setState
}: InputFieldComponentProps) {

    const handleInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let eventValue;
        typeof state === "string" ?
            eventValue = event.target.value
            :
            eventValue = event.target.valueAsNumber;

        setState(eventValue)
    }

    return (
        <input
            type={typeof state}
            value={state}
            placeholder={`${state}`}
            onChange={handleInputFieldChange}
        />

    )
}

// Form 

type DynamicItemFormProps<T extends ProductType | UserType> = {
    children: React.ReactNode,
    item: T
}

function DynamicItemForm<T extends ProductType | UserType>({
    children,
    item
}: DynamicItemFormProps<T>) {

    const [stateObject, setStateObject] = useState(() => {
        const initialState: Record<string, string | number> = {};
        for (const key in item) {
            initialState[key] = item[key] as string | number;
        }
        return initialState;
    });

    const handleChange = (key: string) => (eventValue: number | string) => {
        console.log(eventValue);

        setStateObject(prevState => ({
            ...prevState,
            [key]: eventValue
        }));

    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(stateObject);
    }

    return (
        <div className="component-container">
            {children}

            <form>
                {Object.entries(stateObject).map(([key, value], index) => (
                    <InputFieldComponent
                        key={`${key}-${index}`}
                        state={value}
                        setState={handleChange(key)}
                    />
                ))}

                <ButtonEvent
                    handleClick={handleSubmit}>
                    Submit
                </ButtonEvent>
            </form>
        </div>
    )
}

export default DynamicItemForm