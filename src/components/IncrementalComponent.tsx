import { useState,useEffect } from "react";

export default function IncrementalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervallo = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervallo);
  }, []);

  return <div>{count}</div>;
}

