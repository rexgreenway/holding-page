import styles from "./App.module.css";

import Aurora from "./bits/Aurora";

import RexLogo from "./assets/rex-logo.svg?react";

const App = () => {
  return (
    <div>
      {/* BACKGROUND */}
      <div className={styles.Background}>
        <Aurora
          colorStops={["#eb2e04", "#c47a0c", "#4e0444"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.App}>
        <RexLogo className={styles.Logo} />
        <h1>{window.location.hostname}</h1>
      </div>
    </div>
  );
};

export default App;
