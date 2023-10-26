type ComponentWithChildrenProps = {
    children?: React.ReactNode
}
const ComponentWithChildren = ({children}: ComponentWithChildrenProps) :React.ReactNode => {
    return (
    <>
    {children}
    </>
  )
}

export default ComponentWithChildren