import { useReducer } from "react";

export default function ExampleUseReducers() {
  const initialState = {
    showText: false,
    changeTextStyle: false,
  };

  const HIDE_TXT = " HIDE_TXT";
  const SHOW_TXT = " SHOW_TXT";
  const TOGGLE_TXT = "TOGGLE_TXT";
  function reducer(state, action) {
    switch (action.type) {
      case HIDE_TXT:
        console.log(state, action);
        return {
          showText: false,
        };

      case SHOW_TXT:
        console.log(state, action);
        return {
          ...state,
          showText: true,
        };

      case TOGGLE_TXT:
        console.log(state, action);
        return {
          ...state,
          changeTextStyle: !state.changeTextStyle,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state)
  return (
    <>
      <button onClick={() => dispatch({ type: HIDE_TXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: TOGGLE_TXT })}>
        Change Styling{" "}
      </button>
    </>
  );
}
