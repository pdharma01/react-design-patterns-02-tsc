type TextOwnProps<E extends React.ElementType> = {
    children: React.ReactNode,
    size?: "sm" | "md" | "lg",
    variant?: "primary" | "secondary",
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>


const PolymorphicComponents = <E extends React.ElementType = "div">({
    children,
    size,
    variant,
    as
}: TextProps<E>) => {

    const Component = as || "div"
    return (
        <Component className={`class-${size}-${variant}`}>{children}</Component>
    )
}

export default PolymorphicComponents