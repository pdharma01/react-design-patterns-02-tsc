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
    itemComponent
} :ListType) => {
    return (
        <div>
            <h3>RegularList</h3>
            {items.map((item)=> (<p>{item.name}</p>))}
        </div>
    )
}

export default RegularList