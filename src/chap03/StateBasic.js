import { useState } from "react";

export default function StateBasic ({init}) {
    const [count, setCount] = useState(init);
    // console.log(`count is ${count}.`)
    const handleClickPlus = (() => 
        setCount(count+1));
    const handleClickMinus = (() => setCount(count-1));
    return (
        <>
            <button onClick={handleClickPlus}>+1カウント</button>
            <br/>
            <button onClick={handleClickMinus}>-1カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    );
}