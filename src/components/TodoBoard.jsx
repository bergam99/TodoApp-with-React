// Item 모은 박스

import React from "react";
import TodoItem from "./TodoItems";

function TodoBoard(){
    return(
        <>
            <h1>Ma todo list</h1>
            <TodoItem />
        </>
    )
}

// 이거 다른 컴포넌트에 수출시킬게.
export default TodoBoard