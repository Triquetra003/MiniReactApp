const data=[
    {
        question:"What is ReactJS primarily used for?",
        option1:"Server-side scripting",
        option2:"Building user interfaces",
        option3:"Database management",
        option4:"Graphic design",
        answer:2,
        explanation:"Building user interfaces.One of the major reasons for the popularity of React JS is its ability to create rich user interfaces. React JS is built with components that make it easier for developers to design complex user interfaces with minimal effort."
    },
    {
        question:"What is JSX in React?",
        option1:"A styling language",
        option2:"A templating engine",
        option3:"A syntax extension for JavaScript",
        option4:"A state management library",
        answer:3,
        explanation:"A templating engine.JavaScript syntax extension (JSX) is a way to write HTML-like code in JavaScript that's used with the React JavaScript library. JSX is not valid JavaScript, so it needs to be translated to React.createElement() calls using a transpiler before a browser can read it."
    },
    {
        question:"What is the purpose of React Components?",
        option1:"Managing database connections",
        option2:"Handling server-side logic",
        option3:"Building user interfaces into reusable pieces",
        option4:"Controlling browser settings",
        answer:3,
        explanation:"Building user interfaces into reusable pieces. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components."
    },
    {
        question:"How is data passed between React components?",
        option1:"Using global variables",
        option2:"Through function parameters",
        option3:"via HTTP requests",
        option4:"Using props",
        answer:4,
        explanation:"Using props. In React, props (short for properties) are a way to pass data from a parent component to a child component. The parent component can pass any data type to the child component as a prop, including numbers, strings, objects, functions, and even other components."
    },
    {
        question:"When setState()  is called inside render() method, which of the following events takes place?",
        option1:"Duplicate key error",
        option2:"Repetitive outputs on the screen",
        option3:"Nothing happens",
        option4:"Stackoverflow error",
        answer:4,
        explanation:"Stackoverflow error. Whenever you call setState() in general the render() will be run afterwards. Doing so inside render() itself will cause that function to be called again, and again, and again... Mutating the state and/or props directly."
    },
    {
        question:"The function which is called to render HTML to a web page in react?",
        option1:"ReactDOM_render()",
        option2:"render()",
        option3:"render_DOM()",
        option4:"DOM_HTML()",
        answer:2,
        explanation:"render()"
    }
]

export default data