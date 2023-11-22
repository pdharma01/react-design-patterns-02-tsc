type ButtonProps = {
    variant: "primary" | "secondary",
    children: string  //restrict children type to string, not div or other
} & Omit<React.ComponentProps<"button">, "children"> 

//access html components children and ...rest with  -- & React.ReactComponentProps<button> --(in this case html "button" type to add onClick)

// children is default to ReactNode. By adding custom type children:string , children will then become union of ReactNode and string. To restrict to only string, use--- & Omit<  > ---to omit default children, then add my own children:string

const WrappingHTMLElement = ({ variant, children, ...rest }: ButtonProps) => {
    return (

        <div className="component-section">
            <h4>Wrapping HTML Element into React.ComponentProps</h4>
            <p>Add "& React.ReactComponentProps(button)" to have access to html button children and ...rest of props</p>
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