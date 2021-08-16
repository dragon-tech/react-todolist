import { css }  from "@emotion/react";

export const header = () => 
    css`
        display: flex;
        align-items: flex-start;
    `;

export const headerTitle = () =>

    css`
        color: var(--main-black-color);
        width: 52%;
        text-align: center;
        font-size: 4rem;
        font-family: "Fredoka One", sans-serif;
    `;