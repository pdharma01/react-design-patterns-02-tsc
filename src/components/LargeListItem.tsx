import { ProductType, UserType } from "./types"
import { ClickEventFunctionProps } from "./utilityFunctions/handleClickEvents"

export type LargeListItemProps<T> = {
  item: T
  id?: string,
  handleClick?: ClickEventFunctionProps
}

// ------------  Type Guard ----------------- 
// Takes object of either 2 types. checks "is" product type. checks product property "name" is in object, returns true is both yes , 
function isProduct(itemObject: ProductType | UserType): itemObject is ProductType {
  return "name" in itemObject
}

const LargeListItem = <T extends ProductType | UserType>({ item, id, handleClick }: LargeListItemProps<T>): React.ReactNode => {

  let header, body

  if (isProduct(item)) {

    // Product Item 
    const { id, name, price, description, rating } = item || {};

    header = name
    body = <>
      <h5>price:${price}, ID:{id}, Stars: {rating} </h5>
      <p>{description} </p>
    </>

  } else {

    // User Item 
    const { screen_name, level, email, member } = item || {};

    header = screen_name;
    body = <>
      <h5>Level Now: {level} </h5>
      <p>{email}, Membership: {member.toString()}</p>
    </>

  }

  return (
    <>
      {handleClick ?
        <h3 onClick={(event) => handleClick(event, id)}>{header}</h3>
        :
        <h3>{header}</h3>
      }

      {body}
    </>
  )


}

export default LargeListItem