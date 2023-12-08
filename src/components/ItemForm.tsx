import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent"
import { ProductType, UserType } from "./types"

type StringFieldProps = "screenName" | "name"
type NumberFieldProps = "level" | "rating"

type itemFormProps<T> = {
    children: React.ReactNode,
    item: T
}

function ItemForm<T> ({
    children,
    item
}: itemFormProps<T>) {

    const [stringInput, setStringInput] = useState("")

    const {id, screen_name, level} = item;
    const UserProps = {id, screen_name, level}

console.log(UserProps);





    return (
        <div className="component-container">
            {children}
            {/* <h4>{item.id}</h4> */}
            
            
            
            
            
            <form>

                <input
                    type="text"
                    value={stringInput}
                    placeholder="String Field"
                    onChange={(event) => setStringInput(event.target.value)}
                />

                <input
                    type="number"
                    value={""}
                    placeholder="Number Field"
                    onChange={(event) => console.log(event.target.value)}
                />

                <ButtonEvent
                    handleClick={() => console.log("clicked")}>
                    Submit
                </ButtonEvent>

            </form>


        </div>
    )
}

export default ItemForm