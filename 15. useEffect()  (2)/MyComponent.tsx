import React, { useState, useEffect } from "react";

export default function MyComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener ADDED");

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `${width}px x ${height}px`;
    })
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    // function subtractCount() {
    //     setCount(c => c -1 );
    // }
    // function changeColor() {
    //     setColor(c => c ==="green" ? "red" : "green");
    // }
    return (
        <div>
            <p>Window Width: {width} px</p>
            <p>Window Width: {height} px</p>
        </div>
    );
}
