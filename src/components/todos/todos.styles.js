import { css } from "@emotion/react";

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

export const seeAboutPagePagePlaceholderText = () =>
    css`
        font-family: "Fredoka One", sans-serif;
        font-size: 18px;
        text-transform: uppercase;
    `;