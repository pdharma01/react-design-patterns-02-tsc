export type ClickEventFunctionProps = (
    event: React.MouseEvent<HTMLHeadingElement>,
    id?: string
) => void

export const LogClickEvent: ClickEventFunctionProps = (event, id) => {
    console.log("Click Event: ",id, event);
}

export const LogClickEventTargetText: ClickEventFunctionProps = (event, id) => {
    const text = (event.target as HTMLHeadingElement).textContent
    console.log("Click Event: ", id, text);
}