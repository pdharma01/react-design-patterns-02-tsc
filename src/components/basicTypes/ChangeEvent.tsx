type ChangeEventProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ChangeEvent = ({ value, handleChange }: ChangeEventProps) => {
 return (
  <div className="section">
    <h4>Change Event</h4>
    <input
      type="text"
      value={value}
      onChange={handleChange}

    />

  </div>
  )
}

export default ChangeEvent 