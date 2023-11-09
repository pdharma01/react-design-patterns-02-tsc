type ButtonProps = {
    variant: "primary" | "secondary",
    children: string
} & Omit<React.ComponentProps<"button">, "children">

const WrappingHTMLElement = ({ variant, children, ...rest }: ButtonProps) => {
    return (

        <div className="component-section">
            <h4>Wrapping HTML Element into React.ComponentProps</h4>
            <p>Add "& React.ReactComponentProps(button)" to have access to children and ...rest of props</p>
            <p>Key word "Omit" to limit to only string children</p>
            <button
                className={`${variant}-color-style`}
                {...rest}>
                {children}
            </button>

        </div>
    )
}

export default WrappingHTMLElement