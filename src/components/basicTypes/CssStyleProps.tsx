type CssStylePropsProps = {
    styles: React.CSSProperties
}

const CssStyleProps = ({styles} :CssStylePropsProps) => {
  return (
    <div className="section">
      <h4>CSS style Props</h4>

      <div style={styles}>CssStyleProps</div>
    </div>
  )
}

export default CssStyleProps