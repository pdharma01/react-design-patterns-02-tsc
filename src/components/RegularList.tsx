interface ProductType {
    id :number,
    name :string,
    price :number,
    description :string,
    rating :number
}

interface ListType {
    items :ProductType[],
    resourceName :string,
    itemComponent :React.FC
}



const RegularList = ({
    items,
    resourceName,
    itemComponent : ItemComponent
} :ListType) => {

    return (
        <ul>
        {items.map((item, index)=> (
            <div key={index + resourceName}>
            <h3>{index + 1}</h3>
            <ItemComponent  {...{[resourceName] : item}}/>
            </div>
        ))}
        </ul>
    )
}

export default RegularList