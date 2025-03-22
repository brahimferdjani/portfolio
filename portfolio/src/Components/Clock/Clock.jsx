import { useState, useEffect } from "react";
import "./Clock.scss";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
}

export default Clock;
