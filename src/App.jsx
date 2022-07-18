import React, { useState } from "react";
import { useEffect } from "react";
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
    console.log('最初');
    // [動的に変わる引数(Stateを変更する), 静的に更新する関数(更新する)]
    const [num, setNum] = useState(0);
    // 表示非表示を扱うステート
    const [faceShowFlag, setFaceShowFlag] = useState(false);

    const onClickCountUp = () => {
        setNum(num + 1);
    };

    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    // num に変化があった時だけ3の倍数処理を実行する
    useEffect(() => {
        console.log('useEffect!');
        if (num > 0) {
            // 3の倍数だけ顔が出る
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true);
            } else {
                faceShowFlag && setFaceShowFlag(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num]);

    return (
        <>
            <h1 style={{ color: 'red' }}>Hello React!</h1>
            <ColorfulMessage color='blue' >blue!!!</ColorfulMessage>
            <ColorfulMessage color='pink' >pink!!!</ColorfulMessage>
            <button onClick={onClickCountUp}>Count Up!</button>
            <br />
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>(^^;)</p>}
        </>
    );
};

export default App;
