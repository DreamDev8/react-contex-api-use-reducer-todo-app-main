import {
  ADD_TODO,
  COMPLETED_TODO,
  CHANGE_FILTER_BTN,
  DELETE_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO,
  LIGHT_MODE,
  DRAG_DROP,
} from "./actions";

function reducer(state, action) {
  if (action.type === ADD_TODO) {
    const newTodoList = {
      id: Math.random(),
      todo: action.payload.inputText,
      isCompleted: false,
    };

    const editedTodoList = state.todoList.map((todoItem) => {
      return todoItem.id === state.editId
        ? { ...todoItem, todo: action.payload.inputText }
        : todoItem;
    });

    console.log(editedTodoList);

    console.log(newTodoList);
    return !state.editFlag
      ? { ...state, todoList: [...state.todoList, newTodoList] }
      : {
          ...state,
          todoList: editedTodoList,
          editFlag: false,
          editId: null,
        };
  } else if (action.type === COMPLETED_TODO) {
    const completed = state.todoList.map((todoItem) => {
      return todoItem.id === action.payload.id
        ? { ...todoItem, isCompleted: !todoItem.isCompleted }
        : todoItem;
    });
    console.log(completed);
    return { ...state, todoList: completed };
  } else if (action.type === CHANGE_FILTER_BTN) {
    return { ...state, filteredList: action.payload.filterName };
  } else if (action.type === DELETE_TODO) {
    const deletedTodo = state.todoList.filter((todoItem) => {
      return todoItem.id !== action.payload.id;
    });
    console.log(state.todoList.length);
    console.log(state.todoList);
    return state.todoList.length !== 1
      ? {
          ...state,
          todoList: deletedTodo,
        }
      : {
          ...state,
          todoList: deletedTodo,
          editFlag: false,
          editId: null,
          editText: "",
        };
  } else if (action.type === CLEAR_COMPLETED) {
    const clearCompleted = state.todoList.filter((todoItem) => {
      return !todoItem.isCompleted;
    });
    return { ...state, todoList: clearCompleted };
  } else if (action.type === EDIT_TODO) {
    const editedTodo = state.todoList.find((todoItem) => {
      return todoItem.id === action.payload.id;
    });
    return {
      ...state,
      editFlag: !state.editFlag,
      editId: action.payload.id,
      editText: editedTodo.todo,
    };
  } else if (action.type === LIGHT_MODE) {
    return { ...state, isLightMode: !state.isLightMode };
  } else if (action.type === DRAG_DROP) {
    let todoListDragDrop = [...state.todoList];
    let draggedItemIndex = todoListDragDrop[action.payload.draggedItem];
    todoListDragDrop[action.payload.draggedItem] =
      todoListDragDrop[action.payload.draggedOverItem];
    todoListDragDrop[action.payload.draggedOverItem] = draggedItemIndex;

    return { ...state, todoList: todoListDragDrop };
  }
}

export default reducer;
