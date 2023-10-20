import { ProductType } from "./types"

// const SmallListItem = ({ item } :{item :ProductType}): React.ReactNode => {

type SmallProductListItemProps = {
  item: ProductType
  resourceName: string;
};

const SmallProductListItem = ({
  item,
  resourceName
}: SmallProductListItemProps): React.ReactNode => {

const { name, price } = item;

  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
    </li>
  )
}

export default SmallProductListItem