Introduction
    This project is a simple React application that demonstrates the use of React Router for navigation and state management with hooks. It includes a React Trivia page and a To-Do List page.

Features
    Home Page:
        - Links to the Trivia and To-Do List pages.
    Trivia Page:
        - A trivia is based on knowledge regarding react and it's concepts.
        - When user selects an option, they are shown whether selected option is correct and if not, then point towards to the correct answer.
        - Two buttons previous and next help in navigation or skip questions .
        - A count-down is started as soon as the questions are displayed it is displayed at quiz level and the total time left is displayed to the user.
        - At the end of the trivia, score of the user (which is number of correct answers attempted) is displayed along with entire solution with explanation.  
        - How to Use: 
            -Time Left will be displayed on top right as soon as you start the quiz and the answers once attempted cannot be changed.
            -Scoring: Each correct answer earns you 1 point.
            -Question Types: The quiz includes multiple-choice questions.
            -Navigation: Once you start the Quiz, you cannot navigate to other pages in which case the questions you have attempted will not be considered and the Quiz will be restarted. You can however navigate through questions.
            -Submission: Once you submit the quiz, you will receive your total score along with explanations for each question.
            -Retakes: You can retake the quiz as many times as you like to improve your score and understanding.
    To-Do List Page: 
        - Users can create multiple Lists for multiple tasks in each List.
        - New tasks can be either added in unique lists, deleted from the list or checked to be marked as completed
        - Maximum of 6 lists can be created and each list can contain a maximum of 10 tasks.
        - How to Use:
            - Enter a valid and unique List Name in input field and click on the add (+) icon.
            - This will display a Modal pop-up containing List Name and input field, a close and a save buttons.
            - Enter a valid task name in input field and click on the add (+) icon.
            - This will display the task in task-list below the input field along with two functionalities:
                - delete task : Click on the trash icon beside the task you wish to delete. This will delete entire task whether it has been completed or not.
                - check task : Click on the checkbox field beside the task. This will strike-through the task instead of removing it from the list marking it as completed, also allows you to un-check incompleted tasks later on.
            - Close : close button at the bottom most section of the modal will close the task-list without saving any tasks or data.
            - Save : save changes button beside the close button on bottom most section of task list modal will save all changes added or made in the list since its creation.
            - Display : Once saved, the list will be displayed on the to-do list page with List name, task list along with checked tasks being striked through and the date & time of saving.
    Future Enhancements:
        - Edit task functionality  
        - Edit list functionality
        - Dark-mode toggle 

Installation:
    To get started with this project, follow these steps:
    # Clone the repository:
    git clone https://github.com/Triquetra003/MiniReactApp.git
    cd MiniReactApp
    # Install dependencies:
    npm install
    # Start the development server:
    npm start

Contributing:
- Contributions are welcome! Please follow these steps to contribute:
    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.
- License:
    This project is licensed under the GPL 3.0 License. See the LICENSE file for details.
- Contact:
    If you have any questions or suggestions, feel free to reach out:
    GitHub: https://github.com/triquetra003