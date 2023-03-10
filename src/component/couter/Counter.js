import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handlerIncrement = () => {
        setTimeout(function delay() {
            setCount((count) => count + 1);
        }, 1000);
    };
    return <div onClick={handlerIncrement}>Increment {count}</div>;
};

export default Counter;
