import React,{useRef, useState} from "react"
import data from "../components/data"
import TriviaSolution from '../components/TriviaSolution'

function TriviaPage(){
    
    //definition
    const totalTime= (data.length)*30 // 30 seconds per question
    const[index,newIndex]=useState(0) // to iterate through data array 
    const[gameOver,setGameOver]=useState(false) 
    const[score,newScore]=useState(0) 
    const[click,newClick]=useState(true) // select option once only then disable all options
    const[time,newTime]=useState(totalTime);
    const[attempted,setAttempted]=useState([]); // stores index of question attempted

    // creates reference options array to map through
    let option1=useRef(null);
    let option2=useRef(null);
    let option3=useRef(null);
    let option4=useRef(null);
    let options=[option1,option2,option3,option4];
    
    // trivia timer
    const countDown=()=>{
        if(time<0||gameOver){
            return;
        }
        if(time==0){
            console.log(time)
            setGameOver(true)
            nextQuestion()
            console.log("gameOver")
            return
         }
        newTime(time-1)
    }
  
    // next question on button click
    const nextQuestion=(e)=>{

        newClick(true)

        if(gameOver){
            return
        }

        // remove styling on options html elements if any exist
        options.map((e)=>{
            e.current.style.background=''
            e.current.style.border=''
           
        })

        // increment index to display next question in data array and its options or else end trivia 
        if (index+1 < data.length){
            newIndex(prevIndex=>prevIndex+1)
        }
        else{
            setGameOver(true)
        }

        // check if next question has already been attempted: if attempted, disable selection of new option and display cuurent questions' answer 
        attempted.map((id)=>{
            if(id==index+1){
                if(click){
                    newClick(false)
                }
                options[data[index+1].answer-1].current.style.backgroundColor='rgba(65, 105, 225, 0.447)';
                options[data[index+1].answer-1].current.style.border='1px solid rgb(0, 0, 0)';
            }
        })

    }

    // previous button on click
    const prevQuestion=()=>{
        // disable button on 0th index
        if(index==0){
            return;
        }

        // remove styling
        options.map((e)=>{
            e.current.style.background=''
            e.current.style.border=''
        })
        //decrement index
        newIndex(index-1)

        // check whether previous question has already been attempted
        attempted.map((e)=>{
            if(e==index-1){
                if(click){
                    newClick(false)
                }
                options[data[index-1].answer-1].current.style.backgroundColor='rgba(65, 105, 225, 0.447)';
                options[data[index-1].answer-1].current.style.border='1px solid rgb(0, 0, 0)';
            }
        })
    }

    // check for answer true/false when an option is clicked
    const checkAns=(e,ans)=>{
        if(gameOver){
            return;
        }
         
        // check whether the selected question has already been attempted
        options.map((e)=>{
            let color=e.current.style.backgroundColor
            if(color=='rgba(65, 105, 225, 0.447)'){
                return;
            }
        })

        // disable selecting another option in the same question
        newClick(false)

        // add index of the same question in attempted questions' array
        const addToAttempted=[].concat(attempted,index);
        setAttempted(addToAttempted);

        // display whether answer was correct or wrong, if wrong then display correct answer as well
        if(click==true){
            if (data[index].answer==ans){
                console.log("correct")
                e.target.style.backgroundColor='rgba(19, 190, 113, 0.447)';
                e.target.style.border=' 1px solid rgb(101, 42, 6)';
                newScore(prev=>prev+1); 
            }
            else{
                console.log("wrong")
                e.target.style.backgroundColor='rgba(241, 110, 45, 0.477)';
                e.target.style.border=' 1px solid rgb(101, 42, 6)';
               options[data[index].answer-1].current.style.backgroundColor='rgba(19, 190, 113, 0.447)';
               options[data[index].answer-1].current.style.border='1px solid rgb(101, 42, 6)';
            }
        }

        else{
            return
        }
    }
    
    // after trivia end (gameOver condition), reset all states to original value.
    const Reset=()=>{
        newClick(true)
        newIndex(0)
        newTime(totalTime)
        setGameOver(false)
        newScore(0)
        setAttempted([])
    }

    // call timer function every second
    setTimeout(countDown,1000);
               
    return(
        <div style={{marginBottom:"10vh"}}>
            
            <h1  style={{fontWeight:"lighter",backgroundColor:"#1565c0",color:"white"}}>React JS Trivia</h1>
            <br></br>
            <div id="trivia-page">
            {gameOver?<>
                <h1>Your Score is : {score} out of {data.length}</h1>
                <br></br>
                <center><h2>Solution</h2></center>
                <hr></hr>
                <TriviaSolution/>
                <br></br>
                <center><button onClick={Reset} className="btn btn-success">Retake the Quiz</button></center>
            </>:<>
            <div id="timer-component" className="text-end" style={time<30?{backgroundColor:"red",color:"white"}:{backgroundColor:"#61dafb",color:"black", position:"fixed",right:"5vw",top:"10vh"}}>
             Time Left : {time} seconds
            </div>
            <h4>Question {index+1}. {data[index].question}</h4>
            <div id="grp-ques">
            <br></br>
            <ol type='1'>
            <li  ref={option1} onClick={e=>checkAns(e,1)} id="trivia-options">{data[index].option1}</li>
            <li  ref={option2} onClick={e=>checkAns(e,2)} id="trivia-options">{data[index].option2}</li>
            <li  ref={option3} onClick={e=>checkAns(e,3)} id="trivia-options">{data[index].option3}</li>
            <li  ref={option4} onClick={e=>checkAns(e,4)} id="trivia-options">{data[index].option4}</li>
            </ol>

            <center>

            {index!=0?<button onClick={prevQuestion} id='trivia-button' className="btn btn-success" style={{marginRight:"5%"}}>Prev</button>:""}

            {index+1==data.length?
            <button onClick={nextQuestion} id='trivia-button' className="btn btn-danger" style={{marginRight:"5%"}}>Submit</button>:
            <button onClick={nextQuestion} id='trivia-button' className="btn btn-success" style={{marginRight:"5%"}}>Next</button>}
            
            </center>
            <br></br>
            </div>
            </>}
            </div>
        </div>
    )

}

export default TriviaPage