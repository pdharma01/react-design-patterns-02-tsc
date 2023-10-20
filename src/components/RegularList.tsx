
// type RegularListProps<T> = {
//     items: T[];
//     resourceName: string;
//     itemComponent: React.ComponentType<{ [resourceName: string]: T }>;
// };

type RegularListProps<T> = {
    items: T[];
    resourceName: string;
    itemComponent: React.ComponentType<{
        item: T,
        resourceName: string
    }>;
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
                    <ItemComponent
                        item={item}
                        resourceName={resourceName} />
                </div>
            ))}
        </ul>
    )
}

export default RegularList