# MiniReactApp

This project is a simple React application that demonstrates the use of **React Router** for navigation and **state management** with hooks. It includes two main features: a **React Trivia Quiz** and a **To-Do List**.

---

## Features

### Home Page
- Links to the Trivia and To-Do List pages.

---

### Trivia Page
- Multiple-choice trivia based on React concepts.
- Users get instant feedback (correct/incorrect) and are shown the right answer if wrong.
- Navigation through questions using **Previous** and **Next** buttons.
- Countdown timer starts when the quiz begins; time left is displayed to the user.
- Final score and detailed explanations for each question are shown at the end.

#### How to Use:
- **Time Left** is displayed on the top right once the quiz starts.
- **Answers once selected cannot be changed**.
- **Scoring**: Each correct answer gives 1 point.
- **Navigation Restriction**: You cannot leave the quiz midway; doing so will restart it.
- **Submission**: After submitting, you’ll see your score and explanations.
- **Retakes**: You can retake the quiz as many times as you wish.

---

### To-Do List Page
- Create up to **6 lists**, each with a maximum of **10 tasks**.
- Add, delete, and mark tasks as completed (strike-through).
- Save task lists with a timestamp.

#### How to Use:
- Enter a **unique List Name** and click the add **(+)** icon.
- A modal pops up:
  - Add tasks using the input field and **(+)** icon.
  - **Delete task**: Click the trash icon beside the task.
  - **Mark as completed**: Use the checkbox to strike through.
  - **Save**: Saves the list with all tasks.
  - **Close**: Discards changes made in the modal.
- Saved lists are shown with task details and saved date/time.

---

## Future Enhancements
- Edit task functionality.
- Edit list name.
- Dark-mode toggle.

---

## Installation

To get started with this project:

```bash
# Clone the repository
git clone https://github.com/Triquetra003/MiniReactApp.git
cd MiniReactApp

# Install dependencies
npm install

# Start the development server
npm start
