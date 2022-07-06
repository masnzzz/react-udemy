import React, { useState } from "react";
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
    const onClickCountUp = () => {
        setNum(num + 1);
    };
    // [動的に変わる引数(Stateを変更する), 静的に更新する関数(更新する)]
    const [num, setNum] = useState(0);

    return (
        <>
            <h1 style={{ color: 'red' }}>Hello React!</h1>
            <ColorfulMessage color='blue' >blue!!!</ColorfulMessage>
            <ColorfulMessage color='pink' >pink!!!</ColorfulMessage>
            <button onClick={onClickCountUp}>Count Up!</button>
            <p>{num}</p>
        </>
    );
};

export default App;
