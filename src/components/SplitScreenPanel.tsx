const SplitScreenPanel = ({children, fr} :{children :React.ReactNode, fr :number}) => {
  return (
    <div>
      <h1>Panel Fr: {fr}</h1>
        {children}
    </div>
  )
}

export default SplitScreenPanel