import { useState } from "react"
import ButtonEvent from "./ButtonEvent"
import { LargeListItemProps } from "../LargeListItem"


type HigherOrderComponentProps = {
    component: React.ComponentType<LargeListItemProps>
}

const HigherOrderComponent = ({ component : Component, ...props }: HigherOrderComponentProps) => {

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