import React from "react";

// TodoBoard -> Todoitems 
function TodoItem(props) {
  return (
    <>
    {/* props.item => TodoBoard 에서 item 으로 전달했기 때문. */}
      <div className="todo_item">{props.item}</div>
    </>
  );
}

// TodoBoard 로 수출할게
export default TodoItem;
 