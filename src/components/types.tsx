export type childrenType = {
    children :React.ReactNode
}

export type ProductType = {
    id :number,
    name :string,
    price :number,
    description :string,
    rating :number
}

export type UserType = {
    id: number,
    screen_name: string,
    level: number,
    email: string,
    member: boolean
}

export type FormInputType = {
    inputName?: string
    inputNumber?: number
}