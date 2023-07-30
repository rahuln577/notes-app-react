function Note(props){

    return <div id="note" ><p id="content" className={props.readdo?'done':'undone'}>{props.con}</p>
    <button id="read" onClick={()=>{props.read(props.con)}}>&#10004;</button>
    <button id="remove" onClick={()=>{props.remove(props.con)}}>-</button></div>
}
export default Note