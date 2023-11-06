type ChangeEventProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ChangeEvent = ({ value, handleChange }: ChangeEventProps) => {
 return (
    <input
      type="text"
      value={value}
      onChange={handleChange}

    />
  )
}

export default ChangeEvent 