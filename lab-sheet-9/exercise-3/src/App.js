import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;