import { css } from '@emotion/react';

export const todo = ({theme}) => 
    css`
        position: relative;
        flex: 1 0 auto;
        text-align: center;
        max-height: 34px;
        margin: 16px 0 0;
        font-family: "Oswalad", sans-serif;
        font-size: 24px;
        border-bottom: 1px solid ${theme.color.primary.red};
    `;

export const todoText = ({ isCompleted, theme }) => 
    css`
        width: 100%;
        height: 50px;
        position: absolute;
        font-family: "Oswald", sans-serif;
        cursor: pointer;
        left: 50%;
        transform: translate(-50%);
        text-decoration: ${ isCompleted ? 'line-through' : 'initial' };
        color: ${ theme.color.primary.black }
    `;