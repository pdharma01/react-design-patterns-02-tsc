type BasicPropsProps = {
    stringLiteral: "Works!" | "Also works!"
    optionWithDefault?: string
}


const  BasicProps = ({ stringLiteral, optionWithDefault = "default inputed in BasicProps" }:  BasicPropsProps) :React.ReactNode=> {
    
    return (
        <>
        <div>String Literals : {stringLiteral}</div>
        <h4>Option: {optionWithDefault}</h4>
        </>
    )
}

export default  BasicProps 

