import rexLogo from "/rex-logo.svg";

import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.App}>
      <img src={rexLogo} className={style.Logo} alt="Rex logo" />
      <h1>Holding Page</h1>
    </div>
  );
};

export default App;
