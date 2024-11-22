import { useGlobalContext } from "../src/Context";

function Footer() {
  const { todoList, isLightMode } = useGlobalContext();

  return (
    <section className="footer-container">
      {todoList.length !== 0 && (
        <h2
          style={{
            color: isLightMode
              ? "var(--dark-grayish-blue-1)"
              : "var(--very-dark-grayish-blue-2)",
          }}
        >
          Drag and drop to reorder list
        </h2>
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/DreamDev8" target="_blank">
          DreamDev
        </a>
        .
      </div>
    </section>
  );
}

export default Footer;
