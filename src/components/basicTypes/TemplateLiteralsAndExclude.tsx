type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"


// Combine unions into string literal. Exclude "center-center", include or "center" 
type TemplateLiteralsAndExcludeProps = {
    position: Exclude<
    `${HorizontalPosition}-${VerticalPosition}`, 
    "center-center"
    > 
    | "center"
}


const TemplateLiteralsAndExclude = ({position}: TemplateLiteralsAndExcludeProps) => {
  return (
    <div className="component-container">

        <h4>TemplateLiterals and Exclude</h4>
        <p>Using Type Literals and Exclude : <strong>{position}</strong></p>
    </div>
  )
}

export default TemplateLiteralsAndExclude