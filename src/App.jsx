import { useState } from "react";
import { useGlobalContext } from "../src/Context";
import Header from "../components/Header";
import InputText from "../components/InputText";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

function App() {
  const { isLightMode } = useGlobalContext();
  const [inputText, setInputText] = useState("");

  return (
    <div
      className="app-container"
      style={{
        background: isLightMode
          ? "var(--very-light-grayish-blue)"
          : "var(--very-dark-blue)",
      }}
    >
      <Header />
      <main>
        <InputText inputText={inputText} setInputText={setInputText} />
        <TodoList inputText={inputText} setInputText={setInputText} />
        <Filters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
