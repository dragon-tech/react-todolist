/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import Button from '../button/ButtonClass';
import * as styles from './header.styles';
import  Container  from '../../layout/Container';
import  Item  from '../../layout/Item';
// import { Link } from 'react-router-dom';

const Header = ({ showAddToggle,showAdd,clearTodos }) => {
    const theme = useTheme();
    return (
        <section className="header-component" >
          <Container alignItems="flex-start">
            <Item flex="1">
              <Button text={ showAdd ? 'FINISH' : 'ADD' } onClick={ showAddToggle } padding="16px" />
            </Item>
            <Item flex="auto" >
              <h1 css={ styles.headerTitle(theme) }>Todo List</h1>
            </Item>
            <Item flex={ 1 } align="right">
              <Button text="Clear" onClick={ clearTodos } color="red" align="right" padding="16px" />
            </Item>
          </Container>  
        </section>
    );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
}

export default Header;