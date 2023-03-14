import React, { useEffect, useState } from "react";

const Timer = () => {
    const [message, setMessage] = useState("Evondev");
    useEffect(() => {
        const timer = setInterval(() => {
            // console.log(message);
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, [message]);
    return (
        <input
            className="inline-block px-8 py-4 bg-sky-500 rounded-lg text-white m-5"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></input>
    );
};

export default Timer;
