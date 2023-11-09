import { ProductType, UserType } from "../types"

type GenericsProps<T> = {
    items: T[],
    handleClick: (item: T) => void
}


// ------------  Type Guard ----------------- 
// Takes object of either 2 types. checks "is" product type. checks product property "name" is in object, returns true is both yes , 
function isProduct(itemObject: ProductType | UserType): itemObject is ProductType {
    return "name" in itemObject
}


const Generics = <T extends ProductType | UserType>({ items, handleClick }: GenericsProps<T>): React.ReactNode => {

    const renderItem = (
        item: ProductType | UserType, 
        index: number
        ) :React.ReactNode => {

        if (isProduct(item)) {
            return <p>{index + 1}. {item.name}</p>
        } else {
            return <p>{index + 1}. {item.screen_name}</p>
        }
    }

    return (
        <div>
            <h3>Generics</h3>
            {items.map((item, index) => {

                return (

                    <div key={item.id} onClick={() => handleClick(item)}>
                        {renderItem(item, index)}
                    </div>


                    // <div key={item.id} onClick={() => handleClick(item)}>

                    //     {isProduct(item) ? (
                    //         <p>{index + 1}. {item.name}</p>
                    //     ) : (
                    //         <p>{index + 1}. {item.screen_name}</p>
                    //     )}

                    // </div>

                )
            })}


        </div>
    )
}

export default Generics