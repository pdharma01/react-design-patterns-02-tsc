type ComponentWithChildrenProps = {
  children?: React.ReactNode
}
const ComponentWithChildren = ({ children }: ComponentWithChildrenProps): React.ReactNode => {
  return (
    <div className="section">
      <h4>ComponentWithChildren</h4>
      {children}
    </div>
  )
}

export default ComponentWithChildren