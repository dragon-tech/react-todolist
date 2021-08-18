import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import Button from "../button/ButtonClass";
import  Container  from '../../layout/Container';
import  Item  from '../../layout/Item';

const StyledH1 = styled.h1`
    color: ${props => props.theme.color.primary.black};
    text-align: center;
    font-size: 4rem;
    font-family: "Fredoka One", sans-serif;
`;
class Header extends React.Component {
    render() {
        const { showAddToggle, showAdd, clearTodos, theme } = this.props;
        return (
            <section className="header-component" >
                <Container alignItems="flex-start">
                    <Item flex="1">
                        <Button text={ showAdd ? 'FINISH' : 'ADD' } onClick={ showAddToggle } padding="16px" />
                    </Item>
                    <Item flex="auto" >
                        <StyledH1 theme={ theme }>Todo List</StyledH1>
                    </Item>
                    <Item flex={ 1 } align="right">
                        <Button text="Clear" onClick={ clearTodos } color="red" align="right" padding="16px" />
                    </Item>
                </Container>  
            </section>
        )
    }
    static propTypes = {
        showAddToggle: PropTypes.func.isRequired,
        showAdd: PropTypes.bool.isRequired,
        clearTodos: PropTypes.func.isRequired
      }
}

export default withTheme(Header);