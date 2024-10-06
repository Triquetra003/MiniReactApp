import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function EditList(props) {

  // define states
    const [show, setShow] = useState(false);
    const [input,newInput]= useState("");
    const [todos, setTodos] = useState([]);
    const [taskId,newTaskId]=useState(1) // key id that identifies a task in whole mainList of multiple todos
    const [listId,newListId] =useState(1);
    const [list,newList]=useState([]);
    const [saved, setSaved]=useState(false)
    const [count, setCount] = useState(0); // counts list of tasks in a list and sets value of number of task in todos object

  // list properties;
  let listTitle = props.title // store title for displaying particular mainList
  let duplicateTitle = false; // avoid storing multiple lists with same name

  // date display 
      const date=new Date();
      let year=date.getFullYear();
      let month=date.getMonth();
      let day=date.getDay();
      let dated=date.getDate();
      let hour=date.getHours();
      let mins=date.getMinutes();
      let seconds=date.getSeconds();
      let midday; // set am and pm


  // close popup modal and reset all values
  const handleClose=()=>{
    setShow(false);
    setTodos([])
    newInput("");
    setShow(false);
    setCount(0);
  }

  // reveal popup modal 
  const handleShow = () =>{
    // max lists allowable constraint
    if(list.length>=6){
      alert("Maximum Lists reached...")
      return;
    }
    // avoid duplication of list names/titles
     list.map((e)=>{
      if(e.title==listTitle){
        alert("You already have a List with that name...")
        duplicateTitle=true;
        return;
      }
     })
     // reveal modal
     if(!duplicateTitle){
      setShow(true);
     }
  }
    
  // save task list into To Do List
  const handleSave = () =>{
    // check whether any task exists
    if(todos.length==0){
      alert("You have no tasks to save... Please enter a task")
      return
    }

        // Calculate am or pm to display time in List
        if(hour>=0 && (hour<=11 && mins<=59)){
          midday="AM";
        }
        else if(hour>12 && (hour<=23 && mins<=59)){
          midday="PM";
        }

        // set day of week 
        if(day==0){day='Sun'}
       else  if(day==1){day='Mon'}
       else  if(day==2){day='Tue'}
       else  if(day==3){day='Wed'}
       else  if(day==4){day='Thu'}
       else  if(day==5){day='Fri'}
       else  if(day==6){day='Sat'}

             if(month==0){month='Jan'}
        else if(month==1){month='Feb'}
        else if(month==2){month='Mar'}
        else if(month==3){month='Apr'}
        else if(month==4){month='May'}
        else if(month==5){month='Jun'}
        else if(month==6){month='Jul'}
        else if(month==7){month='Aug'}
        else if(month==8){month='Sep'}
        else if(month==9){month='Oct'}
        else if(month==10){month='Nov'}
        else if(month==11){month='Dec'}

    const dateTime=<>{day} {dated} {month} at {hour-12}:{mins}:{seconds} {midday}</>

    setSaved(true)
    // add to List array details of the tasks, unique key, list title and time of saving 
    let addToList={
      taskList:todos,
      id: listId,
      title: listTitle,
      dateDisplay:dateTime
    }
    newList(list.concat(addToList));
    localStorage.setItem("list",JSON.stringify(list))
    
    //reset all other states except list-id which will be incremented
    setTodos([])
    newInput("");
    setShow(false);
    setCount(0);
    newListId(listId+1);
  }

  // change input state when value of input field is changed
  const changeTaskInput=(e)=>{
    newInput(e.target.value);
    // set character length constraint
    if(e.target.value.length==e.target.maxLength){
      alert("Maximum character length reached...")
  }
  }

  // add task to task list
  const addTask=()=>{
    // valid input constraint
    if(input==""){
      alert("Please Enter a Task")
      return
    }

    // max tasks length constraint
    if(todos.length>=10){
      alert("Maximum task limit reached for this List...")
      return;
    }

    // add a task object to todos array 
    const newTask={
      title:props.title,
      value: input,
      id: taskId,
      taskCount: count,
      completed: false
    }
    const newToDoList=[...todos,newTask]
      setTodos(newToDoList);
      newTaskId(taskId+1)
      newInput("")
      setCount(count+1);

  }

  // delete task from task list
  const deleteTask=(i)=>{
    // filter out the task with same id/key as that of the element clicked (i parameter passed here contains the key value)
    setTodos(todos.filter((e)=>e.id!=i))
    return;
  }

  // check field when a task is completed and strike-through completed tasks
  const checkTask=(checkId)=>{

            //get individual element that has been checked then add/remove its classList property
            let element=document.getElementById(JSON.stringify(checkId));

            // toggle task completed through strike classlist
            if(!element.classList.contains('strike')){
                element.classList.add('strike')
                console.log(todos)
                console.log(checkId)
            }
            else if(element.classList.contains('strike')){
                element.classList.remove('strike');
            }

            // set key="completed" in todos array object 
            todos.map((e)=>{
              if(e.id==checkId){
                e.completed=!e.completed
              }
            })
  }

  // display task list in modal popup
  function displayTaskList(e){
    return (<><li id={e.id}><input type="checkbox" onClick={()=>{checkTask(e.id)}}></input> {e.value} <FontAwesomeIcon icon={faTrash} 
     onClick={()=>{deleteTask(e.id)}} style={{color:"red",float:"right"}}/></li> <hr></hr></>)
  }

  // delete List from main to-do-list page
  function deleteList(title){
    newList(list.filter((e)=>e.title!=title))
    return;
  }
  
  // display Main List on main to-do-list page
  function displayMainList(e){

    // create a values array that stores data to display regarding a list (task item, whether task was completed)
    let values=[]
    for(let i=0;i<e.taskList.length;i++){
      const addVal={
        taskVal:e.taskList[i].value,
        completedVal:e.taskList[i].completed
      }
      values.push(addVal)
    }

    return (
    <div style={{border:"1px solid brown",borderRadius:"5%",margin:"0.5%",backgroundColor:"#e0f7fa"}} className="col-md-4">
      <center>
        <h2 style={{fontWeight:"lighter",backgroundColor:"#1565c0",color:"white"}}>{e.title} <FontAwesomeIcon icon={faTrash} onClick={()=>{deleteList(e.title)}} style={{fontSize:'0.5em',color:"red"}}/></h2>
      </center>
      <hr style={{height:"2px",color:"black",backgroundColor:"black"}}></hr> 
    <>
      {values.map((e)=>{
      if(e.completedVal){
        return (
        <><li style={{textDecoration:"line-through",backgroundColor:"lightGray",paddingLeft:"5%"}}>{e.taskVal}</li><hr></hr></>);
      }
      else{
        return (<><li style={{paddingLeft:"5%"}}>{e.taskVal}</li><hr></hr></>)
      }
    })}
    <center style={{fontSize:"1px",fontWeight:"lighter"}}>{e.dateDisplay}</center>
    </>
    </div>)
  }

  return (
    <>
     <button className="btn btn-primary" style={{borderRadius:"50%",marginLeft:"2%"}}  onClick={handleShow}><FontAwesomeIcon icon={faPlus}/></button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
            <Form.Group>
              <input type="text"placeholder="Enter task" className="task-input" value={input} maxLength="40" onChange={changeTaskInput} autoFocus />
          <button className="btn btn-primary" style={{borderRadius:"50%",marginLeft:"2%"}}><FontAwesomeIcon icon={faPlus} onClick={()=>addTask()}/></button>
            </Form.Group>
            <hr style={{height:"2px",color:"black",backgroundColor:"black"}}></hr>
            <Form.Group> 
                  <ul className='task-list'>
                      {todos.length>0?<>
                      {todos.map(displayTaskList)}
                      </>:<></>}
                  </ul>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <span style={{color:"red"}}>* Maximum Tasks Limit is 10</span>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <hr></hr>
      {saved?<div>
        <div className="container" style={{margin:"1%"}}>
          <div className='row'>{list.map(displayMainList)} </div>
        </div>
      </div>:<></>}
      
    </>
  );
}

export default EditList;