import { ProductType, UserType } from "./types"

export type LargeListItemProps<T> = {
  item: T
}

// ------------  Type Guard ----------------- 
// Takes object of either 2 types. checks "is" product type. checks product property "name" is in object, returns true is both yes , 
function isProduct(itemObject: ProductType | UserType): itemObject is ProductType {
  return "name" in itemObject
}


const LargeListItem = <T extends ProductType | UserType>({ item }: LargeListItemProps<T>): React.ReactNode => {

  

  
  if (isProduct(item)) {
    const { id, name, price, description, rating } = item || {}
    
    return (<div>
        <h5>{name}</h5>
        <h5>price:${price}, ID:{id}, Stars: {rating} </h5>
        <p>{description} </p>
      </div>

    )

  } else {

    const {screen_name, level } = item || {}
    return (<div>
        <h5>{screen_name}</h5>
        <p>Level: {level} </p>
      </div>

    )

  }


}

export default LargeListItem