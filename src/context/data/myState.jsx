import { useState } from "react";
import PropTypes from "prop-types";
import myContext from "./myContext";

function MyState(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <myContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </myContext.Provider>
  );
}

MyState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyState;
