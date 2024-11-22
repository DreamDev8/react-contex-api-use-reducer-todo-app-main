import { createContext, useContext, useReducer } from "react";
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
import reducer from "./reducer";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const initialState = {
  todoList: [],
  filteredList: "all",
  editFlag: false,
  editId: null,
  editText: "",
  isLightMode: false,
};

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //actions

  function addTodo(inputText) {
    dispatch({ type: ADD_TODO, payload: { inputText } });
  }

  function completedTodo(id) {
    dispatch({ type: COMPLETED_TODO, payload: { id } });
  }

  function deleteTodo(id) {
    dispatch({ type: DELETE_TODO, payload: { id } });
  }

  function editTodo(id) {
    dispatch({ type: EDIT_TODO, payload: { id } });
  }

  function changeFilterBtn(filterName) {
    dispatch({ type: CHANGE_FILTER_BTN, payload: { filterName } });
  }

  function clearCompleted() {
    dispatch({ type: CLEAR_COMPLETED, payload: {} });
  }

  function lightMode() {
    dispatch({ type: LIGHT_MODE, payload: {} });
  }

  function handleDragDrop(draggedItem, draggedOverItem) {
    dispatch({
      type: DRAG_DROP,
      payload: { draggedItem, draggedOverItem },
    });
  }

  handleDragDrop;

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addTodo,
        completedTodo,
        changeFilterBtn,
        deleteTodo,
        clearCompleted,
        editTodo,
        lightMode,
        handleDragDrop,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
