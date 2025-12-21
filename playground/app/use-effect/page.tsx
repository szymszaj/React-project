import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect triggered:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
