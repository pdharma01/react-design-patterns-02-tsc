type CssStylePropsProps = {
    styles: React.CSSProperties
}

const CssStyleProps = ({styles} :CssStylePropsProps) => {
  return (
    <div style={styles}>CssStyleProps</div>
  )
}

export default CssStyleProps