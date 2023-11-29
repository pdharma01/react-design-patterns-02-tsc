import { UserType, ProductType } from "../types"
import { LargeListItemProps } from "../LargeListItem"

type GenericsHOCListProps<T> = {
    component: React.ComponentType<LargeListItemProps<T>>,
    items: T[]
}


//Create with children version


function GenericsHOCList<T extends UserType | ProductType>({ component: Component, items }: GenericsHOCListProps<T>) {
    
    return (
        <div className="component-container">
            <h3>Generics with HOC</h3>

            {items.map((item, index) => {
                return (
                    <div key={"GenericListHOC" + index}>
                        <Component
                            item={item}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default GenericsHOCList