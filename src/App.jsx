import React from "react";
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
    const onClickButton = () => alert();
    return (
        <>
          <h1 style={{ color: 'red' }}>Hello React!</h1>
          <ColorfulMessage color='blue' >blue!!!</ColorfulMessage>
          <ColorfulMessage color='pink' >pink!!!</ColorfulMessage>
          <button onClick={onClickButton}>ボタン</button>
        </>
    );
};

export default App;
