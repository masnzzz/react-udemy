import React from "react";

const App = () => {
    const onClickButton = () => alert();
    const contentStyle = {
        color: 'blue',
        fontSize: '18px'
    };
    return (
        <>
            <h1 style={{ color: 'red' }}>Hello React!</h1>
            <p style={contentStyle}>this is practice</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};

export default App;
