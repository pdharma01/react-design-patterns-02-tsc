import { ProductType } from "./types"

const LargeListItem = ({ product } :object): React.ReactNode => {

  const { id, name, price, description, rating } = product || {}

  
  return (
    product ?
      (<div>
        <h3>{name}</h3>
        <h4>price:${price}, ID:{id}, Stars: {rating} </h4>
        <p>{description} </p>

      </div>) : null
  )
}

export default LargeListItem