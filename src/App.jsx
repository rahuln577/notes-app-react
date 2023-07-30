import Header from "./components/Header"
import {useState,useRef} from "react"
import AddNote from "./components/AddNote"
import Note from "./components/Note"
function App(){
    let myref=useRef()
    let [note,setnote]=useState([])
    function read(val){
        setnote(note.map((value)=>{
            if(val==value.content)return{...value,read:!value.read}
            else return value
        }))
    }
    function remove(val){
        setnote(note.filter((cur,index)=>{
            return cur.content!==val
        }))
    }
    function addnote(event){
        setnote((prev)=>{
            console.log(prev)
            return [...prev,{content:myref.current.value,read:false}]
        })
        

    }
    return <div><Header />
    <AddNote myref={myref} onclick={addnote}/>
    {note.map((cur,index)=>{
            return <Note con={cur.content} read={read} remove={remove} readdo={cur.read}/>})
    }
    

    </div>
}
export default App