import { useGlobalContext } from "../src/Context";

function InputText({ inputText, setInputText }) {
  const { addTodo, isLightMode } = useGlobalContext();

  let isInputFilled;

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown() {
    isInputFilled = inputText.length > 0;
    if (event.key === "Enter" && isInputFilled) {
      addTodo(inputText);
      setInputText("");
    }
  }

  return (
    <section
      className={
        isLightMode
          ? "input-text-container input-text-container-light"
          : "input-text-container input-text-container-dark"
      }
    >
      <input
        className={
          isLightMode
            ? "input-text input-text-light input-text-container-light"
            : "input-text input-text-dark input-text-container-dark"
        }
        type="text"
        placeholder="Create a new todo..."
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </section>
  );
}

export default InputText;
