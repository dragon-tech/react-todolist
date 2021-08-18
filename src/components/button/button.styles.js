import { css }  from "@emotion/react";

export const button = ({ color, align, theme, padding }) => {
    let textColor;
    const {
        color: { primary }
    } = theme;

    switch (color) {
        case "black":
            textColor = primary.black;
            break;
        case "red":
            textColor = primary.red;
            break;
        default:
            textColor = primary.black;
    }
    
    return css`
        font-size: 2rem;
        cursor: pointer;
        color:${ textColor };
        font-family: "Fredoka One", sans-serif;
        text-transform: uppercase;
        padding: ${ padding };
        background: unset;
        outline: unset;
        border: unset;
        text-align: ${align}
    `;
}