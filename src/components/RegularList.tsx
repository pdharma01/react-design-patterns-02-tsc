const RegularList = ({
    items
    // resourceName
}:{items :object[]}) => {

    // console.log(items);
    items.forEach((item)=> console.log(item.name))
    return (
        <div>
            <h3>RegularList</h3>
            {items.map((item)=> (<p>{item.name}</p>))}
        </div>
    )
}

export default RegularList