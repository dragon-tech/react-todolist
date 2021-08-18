import { css } from "@emotion/react";

export const addInput = ({ theme }) =>
    css`
        background: unset;
        border: unset;
        padding: 0 64px;
        // flex: 1;
        width: 100%;
        border-bottom: 1px solid ${theme.color.primary.red};
        outline: unset;
        font-family: "Oswald", sans-serif;
        font-size: 16px;
        text-transform: lowercase;
    `;

export const addBtn = ({ theme }) =>
    css`
        font-size: 1.8rem;
        font-family: "Fredoka One", sans-serif;
        padding: 16px;
        padding-right: unset;
        padding-top: unset;
        cursor: pointer;
        color: ${theme.color.primary.black};
        background: unset;
        border: unset;
        outline: unset;
        &:active {
            text-shadow: 1px 1px 2px ${theme.color.primary.black};
        }
    `;