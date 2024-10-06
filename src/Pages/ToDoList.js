import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import EditList from '../components/EditList'

const ToDoList=()=>{
    
    // defining variables
    const [input,newInput]=useState("") // input field
    const [popup,newPopup]=useState(true) // task list popup

    // changes input variable on change of input-field
    const changeListInput=(e)=>{
        newInput(e.target.value);

        // character length constraint
        if(e.target.value.length==e.target.maxLength){
            alert("Maximum character length reached...")
        }
        
    }

    // add new list
    const addList=()=>{

        // valid input condition
        if(input=="" & popup){
            alert("Please enter a list name.")
            newPopup(false)
            return;
        } 
        //modal for task list input
        newPopup(true)
        return
    }

    return(
        <div  style={{marginBottom:"10vh"}}>
        <h1 style={{fontWeight:"lighter",backgroundColor:"#1565c0",color:"white"}}>To Do List</h1>
            <br></br>
            <center>
                <input type="text"placeholder="Enter List Name" className="list-input" value={input} maxLength="15" onChange={changeListInput} autoFocus />
                <span onClick={()=>addList()}>
                {popup?<EditList title={input} style={{width:"100vw"}}/>:<button className="btn btn-primary" style={{borderRadius:"50%",marginLeft:"2%"}}><FontAwesomeIcon icon={faPlus}/></button>}
                </span>
            </center>
            <br></br>
            <center style={{color:"red"}}>* The maximum allowable limit for saving Lists is 6</center>
        </div>
    )
}

export default ToDoList