import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1 className={count < 0 ? "negative" : ""}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>- Delete</button>
      <button onClick={() => setCount(count + 1)}>+ Add</button>
    </div>
  );
}

export default App;
