import { css }  from "@emotion/core";

export const button = ({ align }) => css`
    width: 24%;
    font-size: 2rem;
    cursor: pointer;
    font-family: "Fredoka One", sans-serif;
    text-transform: uppercase;
    padding: 24px;
    background: unset;
    outline: unset;
    border: unset;
    text-align: ${align}
`;