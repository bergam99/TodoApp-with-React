import React, { useState } from "react";
import "./App.css";
// 수출한 Todoboard 수입해줄게.
import TodoBoard from "./components/TodoBoard";

function App() {
  // input value est vide au début.
  const [inputValue, setInputValue] = useState('')
  
  // endroit pour enregistrer les taches => array : useState([array ici])
  // 우리가 보여줘야 할 것은 todoList 에 있는 아이템이다 (array). 
  // 데이터는 app, 즉 parent 에 있고 보여줘야 할 (전달해야 할) 곳은 TodoBoard 임.  => props
  // 여기에 있는 todoList를 TodoBoard 에 props 로 전달하기 (balise 안에!)

  const [todoList, setTodoList] = useState([])

  // add items function
  const addItem = () => {
    console.log("im here", inputValue)
    // J'appelle set de endroit sauvegardé
    setTodoList([...todoList, inputValue])
    // [] = 기존에 있던 아이템은 유지하고 추가하기 => ..., + 새로운 inputValue 를 넣어주세요.

  }

  return (
    <>
      <main>
        {/* INSERT value = {inputValue} pour enregistrer */}
        {/* setInputValue = inputValue state 에 값을 넣어주기 */}
        <input value = {inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)} />
        <button onClick={addItem}>add</button>

          {/* todoboard 가져올게 */}
          {/* 그리고 app-> todoboard 전달 위해 props 쓸게. */}
          <TodoBoard todoList = {todoList} />
      </main>
    </>
  );
}

// Onchange : reconnaitre input value
// Pour enregistrer la value on va utiliser "state"

export default App;

