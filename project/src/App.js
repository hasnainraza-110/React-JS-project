import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import Addtodo from "./MyComponents/Addtodo";
import React, { useState } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) =>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, desc)=>{
    console.log("I am adding this todo",title , desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);

    if(localStorage.getItem(todos)){
      localStorage.setItem("todos", JSON.stringify(todos));
    }

  }

  const [todos, setTodos] = useState(initTodo);

  return (
    <div>
      <Header title="My Todos list" searchBar={true}/>
      <Addtodo addtodo={addtodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
    
  );
}

export default App;
