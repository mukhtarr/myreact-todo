import React, { useEffect, useRef, useState } from 'react'

export default function UseRefDemo() {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        console.log('useEffect called');
        count.current = count.current + 1;
    });


    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>


        </div>
    )
}
