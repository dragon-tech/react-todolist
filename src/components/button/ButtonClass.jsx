import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

const StyledButton = styled.button`
    font-size: 2rem;
    cursor: pointer;
    color:${ props => props.textColor };
    font-family: "Fredoka One", sans-serif;
    text-transform: uppercase;
    padding: ${ props => props.padding };
    background: unset;
    outline: unset;
    border: unset;
    text-align: ${ props => props.align };
`;

class Button extends React.Component {
    render () {
        const { text, onClick, color, align, padding, theme  } = this.props;
        const { color: { primary } } = theme;
        let textColor;
        switch (color) {
            case "black":
                textColor = primary.black;
                break;
            case "red":
                textColor = primary.red;
                break;
            default:
                textColor = primary.black;
        }
        return (
            <StyledButton textColor={ textColor } align={ align } padding={ padding } onClick={ onClick }>
                { text }
            </StyledButton>
        )
    }

    static defaultProps = {
        text: 'Button',
        color: 'black',
        align: 'left',
        padding: '10px'
    }
    
    static propTypes =  {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        color: PropTypes.oneOf(['black','red']),
        align: PropTypes.oneOf(['left','right']),
        padding: PropTypes.string
    }
}

export default withTheme(Button);