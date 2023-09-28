const SplitScreenContainer = ({children}: { children: React.ReactNode[]}) => {
    let columns: string = ""
    children.forEach((child) => {
        columns += `${child.props.fr}fr `;
    })





    return (
        <div
            className="d-grid splitscreen-panel"
            style={{ gridTemplateColumns: columns }}>
                
            {children}
        </div>
    )
}

export default SplitScreenContainer