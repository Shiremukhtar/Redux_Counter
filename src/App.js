import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/countActions";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <h2>count: {count}</h2>
    </div>
  );
}

export default App;
