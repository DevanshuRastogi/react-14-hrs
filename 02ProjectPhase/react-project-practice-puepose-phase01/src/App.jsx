import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import styling from "./styles.module.css";
import TodoItems from "./components/todo-items";
import TodoDetail from "./components/todo-details";
import FormComp from "./components/forms";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [todoDetail, setTodoDetails] = useState(null);
  const [openDialogue, setOpenDialogue] = useState(false);

  async function fetchTodo() {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/todos");
    const result = await response.json();
    // console.log(result);
    if (result?.todos) {
      setLoading(false);
      setTodoList(result.todos);
    } else {
      setLoading(true);
      setTodoList([]);
    }
  }

  async function fetchTodoDetails(singleTodo) {
    try {
      const resp = await fetch(`https://dummyjson.com/todos/${singleTodo}`);
      const det = await resp.json();
      // console.log(det)
      if (det) {
        setTodoDetails(det);
        setOpenDialogue(true);
      } else {
        setTodoDetails(null);
        setOpenDialogue(false);
      }
    } catch (err) {
      // console.log(err);
    }
  }

  // console.log(todoList);
  // console.log(loading);
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    // <div className={styling.outerDivWrapper}>
    //   <h1 className={styling.headTitle}>Simple TODO APP using MUI</h1>
    //   <div className={styling.todoListWrapper}>
    //     {todoList.map((items) => (
    //       <TodoItems fetchTodoDetails={fetchTodoDetails} todo={items} />
    //     ))}
    //   </div>
    //   <TodoDetail  todoDetail={todoDetail} openDialogue={openDialogue} setOpenDialogue={setOpenDialogue} />
    // </div>
    <>
    <FormComp />
    </>
  );
}

export default App;
