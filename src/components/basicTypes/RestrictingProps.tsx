type NumberValue = {
    value: number
}

type PosValue = NumberValue & {
    isPos: boolean
    isNeg?: never
    isZero?: never
}

type NegValue = NumberValue & {
    isNeg: boolean
    isPos?: never
    isZero?: never
} 

type ZeroValue = NumberValue & {
    isZero: boolean
    isPos?: never
    isNeg?: never
} 
 

type RestrictingPropsPropsT = PosValue | NegValue | ZeroValue


const RestrictingProps = ({
    value, 
    isPos, 
    isNeg, 
    isZero
} :RestrictingPropsPropsT) => {
  return (
    <div>
        <h3>RestrictingProps: 
            {value} 
            {isPos && " is Positive"}
            {isNeg && " is Negative"}
            {isZero && " is Zero"}
            
            
            </h3>




    </div>
  )
}

export default RestrictingProps