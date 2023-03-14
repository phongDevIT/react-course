import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    // const handlerIncrement = () => {
    //     setTimeout(function delay() {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // };
    useEffect(() => {
        console.log(`count : ${count}`);
    }, [count]);
    return (
        <div className="flex p-5 gap-x-4 items-center">
            <span className="text-2xl font-bold">{count}</span>
            <button
                onClick={() => setCount(count + 1)}
                className="inline-block px-8 py-4 bg-sky-500 rounded-lg text-white "
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
