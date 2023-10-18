import { ProductType, UserType } from "./types"

// const SmallListItem = ({ item } :{item :ProductType}): React.ReactNode => {

type SmallListItemProps = {
  [resourceName: string]: ProductType;
};

// const SmallListItem = (props: SmallListItemProps) => {

//   const resourceName = Object.keys(props)[0]
//   const { name, price } = props[resourceName];
 

  const SmallListItem = ({
    resourceName,
    item}: {
    resourceName: string,
    item: ProductType | UserType
  }) :React.ReactNode => {
  
    console.log(resourceName);

    // if (typeof item === "ProductType")
    const { name, price } = item;
    console.log(typeof item);

  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
    </li>
  )
}

export default SmallListItem