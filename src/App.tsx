import { useState } from 'react'
import './App.css'


type ToDoItemProps= {
  todo:string,
  onDelete:()=>void,
}


function ToDoItem(props:ToDoItemProps) {
  return (
    <div>
      {props.todo}
      <button onClick={props.onDelete}>Supprimer</button>
    </div>
  );
}

function ToDoList() {
  const [texte, setTexte] = useState('');
  const [todolist, setToDoList] = useState([]as string[]);

function AddToDoList() {
    setToDoList([...todolist, texte]);
    setTexte('');
  }

function clearToDoList() {
    setToDoList([]);
  }

function deleteToDoItem(index:number) {
    const newList = [...todolist];
    newList.splice(index, 1);
    setToDoList(newList);
  }

  return (
    <div>
      <h1>ToDoList</h1>

      <p>Ajouter dans ma ToDoList <input value={texte} onChange={(e)=> setTexte(e.target.value)}type="text"/></p>
      <button onClick={AddToDoList}>Valider</button>
      <button onClick={clearToDoList}>Supprimer tout</button>
      
      {todolist.map((todo, index)=> 
        <ToDoItem key={index} todo={todo} onDelete={() => deleteToDoItem(index)} />
      )}
    </div>
  );
}

export default ToDoList
