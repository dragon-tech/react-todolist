import { css } from '@emotion/react';

export const paper = ({ theme }) =>
    css`
        width: 600px;
        height: 800px;
        background-color: ${theme.background.color.primary};
        border-radius: 4px;
        padding: 32px;
    `;

export const frame  = ({ theme }) => 
    css`
        border: 1px solid ${theme.color.primary.black};
        height: 100%;
    `;
