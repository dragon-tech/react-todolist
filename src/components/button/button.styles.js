import { css }  from "@emotion/react";

export const button = ({ color,align }) => {
    let textColor;

    switch (color) {
        case "black":
            textColor = '#484848';
            break;
        case "red":
            textColor = '#e06262';
            break;
        default:
            textColor = '#484848';
    }
    
    return css`
        width: 24%;
        font-size: 2rem;
        cursor: pointer;
        color:${textColor};
        font-family: "Fredoka One", sans-serif;
        text-transform: uppercase;
        padding: 24px;
        background: unset;
        outline: unset;
        border: unset;
        text-align: ${align}
    `;
}