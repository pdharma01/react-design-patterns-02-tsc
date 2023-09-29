import { childrenType } from "./types";

const SplitScreenContainer = ({children}: childrenType) => {
    let columns: string = ""
    children?.forEach((child :childrenType) => {
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