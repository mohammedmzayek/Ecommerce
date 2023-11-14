import myContext from "./myContext";
function myState(props) {
  const state = {
    name: "Kamal Nayan",
    class: "9 C",
  };
  return (
    <myContext.Provider value={state}>{props.children}</myContext.Provider>
  );
}

export default myState;
