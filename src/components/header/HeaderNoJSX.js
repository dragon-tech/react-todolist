/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from '@emotion/react';
import PropTypes from "prop-types";
import Button from "../button/ButtonNoJSX";
import * as styles from "./header.styles";
import  Container  from '../../layout/Container';
import  Item  from '../../layout/Item';

const Header = ({ showAddToggle,showAdd,clearTodos }) => {
    const theme = useTheme();

    return jsx(
        "section",
        {
            className: "header-component",
        },
        jsx(
            Container,
            {
                alignItems: "flex-start"
            },
            jsx(
                Item,
                {
                    flex: 1
                },
                jsx(
                    Button,
                    {
                        text: showAdd ? 'FINISH' : 'ADD',
                        onClick: showAddToggle
                    }
                )
            ),
            jsx(
                Item,
                {
                    flex: 2
                },
                jsx(
                    "h1",
                    {
                        css: styles.headerTitle( theme )
                    },
                    "Todo List"
                )
            ),
            jsx(
                Item,
                {
                    flex: 1,
                    align: "right"
                },
                jsx(
                    Button,
                    {
                        text: "clear",
                        onClick: clearTodos,
                        color: "red",
                        align: "right"
                    }
                )
            )
        )

    )
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
}
  
export default Header;