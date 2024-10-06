import React from "react";
import data from "../components/data"
import { Link } from "react-router-dom";

function home(){
return(
    <div  style={{marginBottom:"10vh"}}>
    <br></br>
<h1 style={{backgroundColor:"#1565c0",color:"white"}}>My Mini App</h1>
<div id="projects">

<br></br>
    <table>
        <tr>
            <td id="home_pg_td">
            <>
<h2>1. React Trivia</h2>
     <p>

Welcome to the React Quiz! Test your knowledge and skills with our comprehensive set of questions designed to challenge both beginners and experienced developers. This quiz covers a wide range of topics, from basic concepts to advanced techniques in React. Whether you’re preparing for an interview or just want to brush up on your React skills, this quiz is the perfect way to gauge your understanding.
     </p>
     
       <h3>Rules</h3>
        <ol>
            <li>Number of Questions: The quiz consists of {data.length} questions.</li>
            <li>Time Limit: You will be given a total of {(data.length * 30)/60} minutes and the answers cannot be changed.</li>
            <li>Scoring: Each correct answer earns you 1 point. Maximum points are {data.length}.</li>
            <li>Question Types: The quiz includes multiple-choice questions.</li>
            <li>Navigation: Once you start the Quiz, you cannot navigate to other pages in which case the questions you have attempted will not be considered and the Quiz will be restarted.</li>
            <li>Submission: Once you submit the quiz, you will receive your total score along with explanations for each question.</li>
            <li>Retakes: You can retake the quiz as many times as you like to improve your score and understanding.</li>
        </ol>
     
     <center><button className="btn btn-success"><Link to="/react-trivia"  style={{textDecoration:"none",color:"white"}}>React-Trivia </Link></button></center>
    </>
            </td>
            <td id="home_pg_td">
            <>
    <h2>2. To-Do List web-page</h2>
    <p>
    Our To-Do List web page is designed to help you stay organized and boost your productivity. Whether you’re managing daily tasks, planning a project, or keeping track of personal goals, this intuitive and user-friendly application has got you covered.
    </p>
<br></br>
    
        <p>
        <h3>Features</h3>
            <li>Easy Task Creation: Quickly add new tasks with a simple and clean interface.</li>
            <li>Progress Tracking: Check off completed tasks and see your progress at a glance.</li>
            <li>Edit and Delete: Easily modify or remove tasks as your plans change.</li>
            <li>Local Storage: Your tasks are saved in your browser’s local storage, so you won’t lose your data even if you refresh the page.</li>
    </p>
    <br></br>
    <p>
    <h3>How to Use:</h3>
            <li>Add a Task: Enter your task in the input field and click the “Add” button.</li>
            <li>Mark as Complete: Click on a task check bok to mark it as completed.</li>
            <li>Edit a Task: Click the edit icon next to a task to modify its details.</li>
            <li>Delete a Task: Click the delete icon to remove a task from your list.</li>
        </p>
    <center><button  className="btn btn-success"><Link to="/to-do-list"  style={{textDecoration:"none",color:"white"}}>Create a List</Link></button></center>
    </> 
            </td>
        </tr>
    </table>

<br></br>
</div>
     <br></br>
    </div>
)
}

export default home;