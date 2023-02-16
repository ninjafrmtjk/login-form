import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// const test = () => {
//   if (true) return 1;
//   return (
//     <>
//     <div>
//       test
//       <div></div>
//     </div>
//     <div></div>
//     </>

//   );
// };

// const test1 = () => true;


// export const test2 = () => {
//   return();
// }

// const test3 = () => {
//   return ();
// }
// export default test3;

// export const App = () => {
// constructor {
//   this.state = {
//     showComment = false;
//   }
//   this.state.showComment = true;
//   this.setState({
//     showComment = true;
//   })
// }

// }



function App() {

  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );




  // const [showComment, setShowComment] = useState(false);
  /*const [list, setList] = useState([]);
  const [input, setInput] = useState("")

  // useEffect

  const addTodo = (todo) => {

    

   if (todo === "") {
      //alert('ERROR!! THERE IS NO TODO IN LIST')
      // return;
    } else {
      const newTodo = {
        id: Math.random(),
        todo: todo,
      };

    
  
      setList([...list, newTodo]);
  
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    // id = 1
    // list = [{id: 1, todo: 'ray'}, {id: 2, todo:'Suhrob'}]
    const newList = list.filter((todo) => todo.id !== id);
    // list = [{id: 2, todo:'Suhrob'} ];
    setList(newList);
  };

  return ( 
    <div id="root">
      <h1>ToDo List</h1>
      <input className="input"
        type="text" 
        value={input}
        onChange={(a) => setInput(a.target.value)}
        />
        <button id="add" onClick={() => addTodo(input)}>Add</button>
      
        <ol id="ul">
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button className="delBut" onClick={() => deleteTodo(todo.id)}> X </button>
            </li>
          ))}
        </ol>
        
    </div>
  );*/
}

export default App