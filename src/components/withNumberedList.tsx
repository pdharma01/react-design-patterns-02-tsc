





function withNumberedList<T>(Component: React.ComponentType<T>): React.ComponentType<T> {

    const ReturnedComponent = (props) => {
        console.log(props);
        return <Component {...props}/>
    }
  return (ReturnedComponent)
}

export default withNumberedList