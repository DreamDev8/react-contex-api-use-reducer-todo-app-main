import { useGlobalContext } from "../src/Context";

function Header() {
  const { isLightMode, lightMode } = useGlobalContext();

  return (
    <header
      className={
        isLightMode
          ? "background-img background-img-light"
          : "background-img background-img-dark"
      }
    >
      <nav>
        <h1 className="logo">TODO</h1>
        <div onClick={lightMode}>
          {isLightMode ? (
            <img
              className="light-dark-mode"
              src="images/icon-moon.svg"
              alt=""
            />
          ) : (
            <img className="light-dark-mode" src="images/icon-sun.svg" alt="" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
