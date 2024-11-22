import { useGlobalContext } from "../src/Context";

function Filters() {
  const {
    todoList,
    filteredList,
    changeFilterBtn,
    clearCompleted,
    isLightMode,
  } = useGlobalContext();

  const activeTodosCount = todoList.filter((todoItem) => {
    return !todoItem.isCompleted;
  }).length;

  const itemsText = activeTodosCount === 1 ? "item" : "items";

  // let filterStyle;

  function handleFilteredStyle(filterName) {
    return filteredList === filterName ? "filter-style" : "";
  }

  return (
    <section
      style={{
        boxShadow: isLightMode && "0px 5px 10px var(--light-grayish-blue-2)",
      }}
      className={
        isLightMode
          ? "todo-list-container filter-btns-container input-text-container-light"
          : "todo-list-container filter-btns-container input-text-container-dark"
      }
    >
      {todoList.length !== 0 && (
        <div className="todo-list-btns">
          <h4>
            {activeTodosCount} {itemsText} left
          </h4>
          <div className="filter-btns">
            <button
              className={`${handleFilteredStyle("all")} ${
                isLightMode ? "filter-btns-light" : "filter-btns-dark"
              }`}
              onClick={() => changeFilterBtn("all")}
            >
              All
            </button>
            <button
              className={`${handleFilteredStyle("active")} ${
                isLightMode ? "filter-btns-light" : "filter-btns-dark"
              }`}
              onClick={() => changeFilterBtn("active")}
            >
              Active
            </button>
            <button
              className={`${handleFilteredStyle("completed")} ${
                isLightMode ? "filter-btns-light" : "filter-btns-dark"
              }`}
              onClick={() => changeFilterBtn("completed")}
            >
              Completed
            </button>
          </div>
          <button
            className={isLightMode ? "clear-light" : "clear-dark"}
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        </div>
      )}
    </section>
  );
}

export default Filters;
