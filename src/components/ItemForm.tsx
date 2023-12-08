import { useState } from "react"
import ButtonEvent from "./basicTypes/ButtonEvent"
import { ProductType, UserType } from "./types"


type itemFormProps<T> = {
    children: React.ReactNode,
    item: T
}


const TextFieldComponent = () => {
    return 
}

const NumFieldComponent = () => {
    return 
}

// Take item parameter (User or Product), then dynamically create all fields , daynamically create all States
function createObject(keys: string[], values: any[]): Record<string, any> {
    const dynamicObject: Record<string, any> = {};
  
    keys.forEach((key, index) => {
      dynamicObject[key] = values[index];
    });
  
    return dynamicObject;
  }
  
  // Example usage
  const keys = ['key1', 'key2', 'key3']; // Or keys obtained dynamically
  const values = [42, 'Hello', true]; // Or values obtained dynamically
  
  const myDynamicObject = createObject(keys, values);
  
  console.log(myDynamicObject);


  
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