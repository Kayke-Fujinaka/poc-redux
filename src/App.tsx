import { useDispatch, useSelector } from "react-redux";

import { IReduxState } from "./interfaces/store";
import { discrement, increment, reset } from "./store/ducks/counter";

function App() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: IReduxState) => state.counter.value);

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor: {counterValue}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(discrement())}>Decrementar</button>
      <button onClick={() => dispatch(reset())}>Resetar</button>
    </div>
  );
}

export default App;
