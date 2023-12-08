import { UserType, ProductType } from "../types"
import { ClickEventFunctionProps } from "../utilityFunctions/handleClickEvents"
import { LargeListItemProps } from "../LargeListItem"

type GenericsHOCListProps<T> = {
    children: React.ReactNode
    itemComponent: React.ComponentType<LargeListItemProps<T>>,
    items: T[]
    handleClick?: ClickEventFunctionProps
}


//Create with children version


function GenericsHOCList<T extends UserType | ProductType>(
    { children, 
        itemComponent: Component, 
        items, 
        handleClick 
    }: GenericsHOCListProps<T>): React.ReactNode {
    
    return (
        <div className="component-container">
            {children}
            {items.map((item, index) => {
                const id = "GenericListHOC-" + index
                return (
                    <div key={id}>
                        <Component
                            item={item}
                            id ={id}
                            handleClick={handleClick}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default GenericsHOCList