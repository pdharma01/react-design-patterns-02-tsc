type ButtonEventProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: string
  ) => void,
  buttonText: string
}

const ButtonEvent = ({ handleClick, buttonText }: ButtonEventProps) => {
  return (
    <>
      <button
        type="submit"
        onClick={(event) => handleClick(event, "ButtonEventClicked:")}>{buttonText}</button>
    </>
  )
}

export default ButtonEvent