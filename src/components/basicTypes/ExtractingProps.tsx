import BasicProps from "./BasicProps"

const ExtractingProps = (props: React.ComponentProps<typeof BasicProps>) => {
  return (
    <div className="component-container">
      <h3>ExtractingProps</h3>
      <div>String Literals : {props.stringLiteral}</div>
      <h4>Option: {props.optionWithDefault}</h4>
    </div>
  )
}

export default ExtractingProps