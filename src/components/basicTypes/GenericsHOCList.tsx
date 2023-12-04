import { UserType, ProductType } from "../types"
import { LargeListItemProps } from "../LargeListItem"

type GenericsHOCListProps<T> = {
    itemComponent: React.ComponentType<LargeListItemProps<T>>,
    items: T[]
    handleClick: (item
        // event: React.MouseEvent<HTMLHeadingElement>,
      ) => void
}


//Create with children version


function GenericsHOCList<T extends UserType | ProductType>({ itemComponent: Component, items, handleClick }: GenericsHOCListProps<T>): React.ReactNode {
    
    return (
        <div className="component-container">
            <h3>Generics with HOC</h3>

            {items.map((item, index) => {
                return (
                    <div key={"GenericListHOC" + index}>
                        <Component
                            item={item}
                            handleClick={handleClick}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default GenericsHOCList