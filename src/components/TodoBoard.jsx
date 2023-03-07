// Item 모은 박스

import React from "react";
import TodoItem from "./TodoItems";

// injecte data de APP à Todoboard avec props (todoList)
function TodoBoard(props){
    // = todoBoard 에서 프린트 한 todoList 임. 
    // console.log("todoBoard", props.todoList)
    return(
        <>
            <h1>Ma todo list</h1>
            {/* <TodoItem /> */}
            {/* todoList에 있는 각각의 아이템을 todoItem 안에 넣어주기 => js */}
            {/* props 가 todoList 를 보여줄거임. 근데 List 에 있는 item 들을 하나씩 꺼내서 todoItem 안에 넣어줄거임. */}
            {/* map = array 에 있는 아이템을 하나씩 가져와서 (item)으로 반환해줌. */}
            {/* array 함수 */}
            {/* TodoItem 을 보여주고 싶어서 item 을 prpps 로 전달할거임.*/}
            {props.todoList.map((item)=><TodoItem item={item} />)}
        </>
    )
}

// 이거 다른 컴포넌트에 수출시킬게.
export default TodoBoard