import { useEffect, useRef } from "react";
import { useGlobalContext } from "../src/Context";

function TodoList({ inputText, setInputText }) {
  const {
    todoList,
    filteredList,
    completedTodo,
    deleteTodo,
    editFlag,
    editTodo,
    editText,
    editId,
    isLightMode,
    handleDragDrop,
  } = useGlobalContext();

  //todoList based on filters

  const filteredTodos = handleFilteredTodos();

  function handleFilteredTodos() {
    if (filteredList === "active") {
      return todoList.filter((todoItem) => !todoItem.isCompleted);
    } else if (filteredList === "completed") {
      return todoList.filter((todoItem) => todoItem.isCompleted);
    }
    return todoList;
  }

  useEffect(() => {
    setInputText(editText);

    console.log(editFlag);
  }, [editText]);

  //drag and drop
  const draggedItem = useRef(0);
  const draggedOverItem = useRef(0);

  return (
    <section
      className={
        isLightMode
          ? "todo-list-container input-text-container-light"
          : "todo-list-container input-text-container-dark"
      }
    >
      <ul>
        {filteredTodos.map((todoItem, index) => {
          return (
            <li
              className="input-text todo-text"
              key={index}
              style={{
                textDecoration: todoItem.isCompleted ? "line-through" : "none",
                textDecorationColor: todoItem.isCompleted
                  ? "var(--dark-grayish-blue-2)"
                  : "none",
                textDecorationThickness: todoItem.isCompleted ? "1px" : "none",
              }}
              draggable
              onDragStart={() => (draggedItem.current = index)}
              onDragEnter={() => (draggedOverItem.current = index)}
              onDragEnd={() =>
                handleDragDrop(draggedItem.current, draggedOverItem.current)
              }
              onDragOver={(e) => e.preventDefault()}
            >
              <span
                className={`${
                  todoItem.isCompleted
                    ? "completed-check-back input-text-check-back"
                    : "input-text-check-back"
                } ${
                  isLightMode
                    ? "input-text-check-back input-text-check-back-light"
                    : "input-text-check-back input-text-check-back-dark"
                }`}
              >
                {todoItem.isCompleted && (
                  <img
                    src="images/icon-check.svg"
                    alt=""
                    className="icon-check"
                  />
                )}
                <span
                  style={{ background: isLightMode && "var(--white)" }}
                  className={
                    todoItem.isCompleted
                      ? "completed-check-front input-text-check-front"
                      : "input-text-check-front"
                  }
                ></span>
              </span>
              <p
                className={`${isLightMode && "todo-text-light"} ${
                  !isLightMode && "todo-text-dark"
                } ${
                  isLightMode &&
                  todoItem.isCompleted &&
                  "todo-text-light-completed"
                } ${
                  !isLightMode &&
                  todoItem.isCompleted &&
                  "todo-text-dark-completed"
                }`}
                onClick={() => completedTodo(todoItem.id)}
              >
                {todoItem.todo}
              </p>
              <div className="icons">
                <div
                  className="icons-delete"
                  onClick={() => deleteTodo(todoItem.id)}
                ></div>
                <div
                  className="icons-edit"
                  onClick={() => editTodo(todoItem.id)}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
