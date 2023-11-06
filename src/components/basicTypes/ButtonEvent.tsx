type ButtonEventProps = {
  children: React.ReactNode,
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: string
  ) => void,
}

const ButtonEvent = ({ children, handleClick }: ButtonEventProps) => {
  return (
    <>
      <button
        type="submit"
        onClick={(event) => handleClick(event, "ButtonEventClicked:")}>

        {children}
        
      </button>
    </>
  )
}

export default ButtonEvent