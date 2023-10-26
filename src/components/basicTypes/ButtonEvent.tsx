type ButtonEventProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: string
  ) => void,
}

const ButtonEvent = ({ handleClick }: ButtonEventProps) => {
  return (
    <>
      <button
      type = "submit"
        onClick={(event) => handleClick(event, "ButtonEventClicked:")}>Submit</button>
    </>
  )
}

export default ButtonEvent