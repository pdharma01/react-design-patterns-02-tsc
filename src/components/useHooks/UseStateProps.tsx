import { useState } from "react"
import ButtonEvent from "../basicTypes/ButtonEvent"
import { UserType } from "../types"

type UseStatePropsProps = {
    user: UserType
}

const UseStateProps = ({ user }: UseStatePropsProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false) //type inferred by initial state
    const [authUser, setAuthUser] = useState<UserType | null>(null)


    const handleLogin = () => {
        setIsLoggedIn(true)
        setAuthUser(user);
    }


    const handleLogOut = () => {
        setIsLoggedIn(false);
        setAuthUser(null);
    }

    return (
        <div className="component-container">
            <h3>UseState Future Props</h3>
            {isLoggedIn ? (
                <div>
                    <ButtonEvent handleClick={handleLogOut}>Log Out</ButtonEvent>
                    <h4>Logged in as
                        <strong> {authUser?.screen_name}</strong>
                    </h4>
                </div>
            ) : (
                <div>
                    <ButtonEvent handleClick={handleLogin}>Log In</ButtonEvent>
                    <h4>Not Logged In</h4>
                </div>
            )}
        </div>
    )
}

export default UseStateProps