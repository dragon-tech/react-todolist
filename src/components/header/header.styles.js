import { css }  from "@emotion/react";

export const header = () => 
    css`
        display: flex;
        align-items: flex-start;
    `;

export const headerTitle = theme =>

    css`
        color: ${theme.color.primary.black};
        text-align: center;
        font-size: 4rem;
        font-family: "Fredoka One", sans-serif;
    `;