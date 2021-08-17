import { css } from "@emotion/react";

export const todos = () => 
    css`
        display: flex;
        flex-direction: column;
        min-height: 500px;
    `;
export const todoPlaceholderText = () =>
    css`
        font-family: "Fredoka One", sans-serif;
        font-size: 24px;
        text-align: center;
        padding: 16px;
    `;

export const addBtnPlaceholderText = ({ theme }) =>
    css`
        text-transform: uppercase;
        font-size: 26px;
        font-family: "Fredoka One", sans-serif;
        font-weight: 600;
        color: ${theme.color.primary.black};
    `;