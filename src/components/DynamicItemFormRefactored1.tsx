import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent"
import { ProductType, UserType } from "./types"

type InputFieldComponentProps = {
    value: string | number,
    onChange: (value: string | number) => void
};

function InputFieldComponent({ value, onChange }: InputFieldComponentProps) {

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.type === 'number' ?
            Number(event.target.value)
            :
            event.target.value;

        onChange(newValue);
    };

    return (
        <input
            type={typeof value === 'number' ? 'number' : 'text'}
            value={value}
            placeholder={`${value}`}
            onChange={handleInputChange}
        />
    );
}

type DynamicItemFormRefactored1Props<T> = {
    item: T,
    children: React.ReactNode
    // children: (value: T[keyof T]) => React.ReactNode
};

function DynamicItemFormRefactored1<T extends Record<string, string | number>> ({ 
    item, 
    children 
}: DynamicItemFormRefactored1Props<T>) {

    const [stateObject, setStateObject] = useState<T>(() => {
        return { ...item };
    });

    const handleChange = <K extends keyof T>(key: K) => (value: T[K]) => {
        setStateObject(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const renderChild = <K extends keyof T>(key: K) => {
        // return children(stateObject[key]);
    };

    return (
        <div className="component-container">
            {children}
            {Object.keys(stateObject).map((key, index) => (
                <div key={`${key}-${index}`}>
                    <InputFieldComponent
                        value={stateObject[key]}
                        onChange={handleChange(key)}
                    />
                    {/* {renderChild(key as keyof T)} */}
                </div>
            ))}
        </div>
    );
}

export default DynamicItemFormRefactored1;
