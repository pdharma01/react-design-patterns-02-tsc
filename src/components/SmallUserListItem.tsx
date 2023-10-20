import { UserType } from "./types"

type SmallUserListItemProps = {
    item: UserType
    resourceName: string
}

const SmallUserListItem = ({
    item,
    resourceName
}: SmallUserListItemProps): React.ReactNode => {

    const {screen_name, email} = item;
  return (
    <li>
    <h3>{screen_name}</h3>
    <p>{email}</p>
  </li>
)
  
}

export default SmallUserListItem