
function AddNote(props){
    return <div id="addnote">
        <input ref={props.myref} id="text"></input>
        <button id="addbtn" onClick={props.onclick}>+</button>
    </div>
}
export default AddNote