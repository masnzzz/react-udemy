import React from "react";

const ColorfulMessage = (props) => {
    const { color, children } = props;
    const contentStyle = {
        // color: color,
        // propsの名前が一致している場合は省略した書き方もできる
        color,
        fontSize: '18px'
    };

    return <p style={contentStyle}>{children}</p>;
}

export default ColorfulMessage;
