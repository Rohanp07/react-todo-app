import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase'
function App() {

  //useState is a hook which helps to change state of a functional component 
  const [todo,setTodo] = useState([]);
  const [input,setInput]=useState('');


  //when the app loads we need to fetch data from db useEffect hook does the same
  useEffect(()=>{
    db.collection('todos').onSnapshot(snapshot =>{
      setTodo(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
    })

  },[]);

  const addTodo = (event) =>{

    event.preventDefault();
    if(input)
    {
      db.collection('todos').add({
        todo : input
      }
        
      )
      setTodo([...todo,input]);
      setInput("")
    }
  }

  return (
    <div className="App">
      <div >
      <h1 >Rohan's TODO LIST 🧛🏼</h1>
      </div>

      <div id="title">
        <form>

          <span>
            <TextField id="outlined-basic" label="✅ Write a todo:" variant="outlined" value={input} onChange={event =>setInput(event.target.value)}/>
          </span>

          <span>
            <Button className="btn" type="submit" onClick= {addTodo} variant="contained" color="primary">
              Add Todo
            </Button>
          </span>

        </form>
      </div>
      <ul>
        { todo.map(todo => (
          <Todo todo={todo} />
          )) 
        }
      </ul>


    </div>
  );
}

export default App;
