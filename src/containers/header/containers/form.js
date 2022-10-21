function Form(props){
    return(
        <>
        <input 
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.event}
        className={props.className}
        />
        </>
    )
}
export default Form