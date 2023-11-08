import { ProductType } from "./types"

export type LargeListItemProps = {
  product: ProductType | null
}
const LargeListItem = ({ product }: LargeListItemProps): React.ReactNode => {

  const { id, name, price, description, rating } = product || {}


  return (
    product ? (
      
      <div>
        <h3>{name}</h3>
        <h4>price:${price}, ID:{id}, Stars: {rating} </h4>
        <p>{description} </p>
      </div>

    ) : null
  )

}

export default LargeListItem