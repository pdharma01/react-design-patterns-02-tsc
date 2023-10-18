
// type RegularListProps<T> = {
//     items: T[];
//     resourceName: string;
//     itemComponent: React.ComponentType<{ [resourceName: string]: T }>;
// };

type RegularListProps<T> = {
    items: T[];
    resourceName: string;
    itemComponent: React.ComponentType<{ resourceName: string, item: any }>;
};


function RegularList<T>({ 
    items, 
    resourceName, 
    itemComponent: ItemComponent 
}: RegularListProps<T>) {

    return (
        <ul>
            {items.map((item, index) => (
                <div key={index + resourceName}>
                    <h3>{index + 1}</h3>
                    {/* <ItemComponent  {...{ [resourceName]: item }} /> */}
                    <ItemComponent  resourceName = {resourceName} item = {item} />
                </div>
            ))}
        </ul>
    )
}

export default RegularList