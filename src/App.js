import React,{useState} from 'react'
import "./App.css"

function App() {
  const[toDos,setTodos]=useState([])
  const[todo,setTodo]=useState('')

//to delete the todos when the delete button is clicked
const handleDelete = (id) => {
  setTodos(toDos.filter((obj) => obj.id !== id));
};

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hey... It's {Date.now()} </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text:todo , status:false}])} className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
      {toDos.map((obj)=>{
      //map function for iterating the todos array
    return(
      <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                setTodos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked
                    
                  }
                  return obj2
                }))
                
              }} value={obj.status} type="checkbox" name="" id="" />
             <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={()=>handleDelete(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
      )
})}
     
      </div>
    </div>
  );
}

export default App

