import { useState } from "react";

export default function Hello() {
    
    const [name, setName] = useState("groomi");

    return (
        <div>
            <h2 id="name"></h2>
            <button onClick={() => {
                setName(name === "groomi" ? "김구름이" : "groomi");
            }}>

            </button>
        </div>
    );
}