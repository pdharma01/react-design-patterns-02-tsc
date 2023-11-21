import { useState } from "react"
import ButtonEvent from "./ButtonEvent"
import { LargeListItemProps } from "../LargeListItem"
import { ProductType, UserType } from "../types"


type HigherOrderComponentProps<T> = {
    component: React.ComponentType<LargeListItemProps<T>>,
    item: T
}



// const HigherOrderComponent = ({ component : Component, ...props }: HigherOrderComponentProps<T>) => {

  function HigherOrderComponent<T extends ProductType | UserType>({ component : Component, ...props }: HigherOrderComponentProps<T>) {

    const [showSubComponent, setShowSubComponent] = useState(false)

    return (

        <div className="component-container">
            <h3>HigherOrderComponent</h3>

            {showSubComponent ? (
                <Component {...props} />
            ) : (
                <h5>Not showing Sub Component</h5>
            )}

            <ButtonEvent handleClick={() => setShowSubComponent(!showSubComponent)}>Toggle Show Sub Component</ButtonEvent>


        </div>
    )



}

export default HigherOrderComponent