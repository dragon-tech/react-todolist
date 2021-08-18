/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import PropTypes from "prop-types";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align, padding }) => {

    const theme = useTheme();

    return ( 
        <button css={styles.button({ align, color, theme , padding })} onClick={ onClick } > 
            { text } 
        </button>
    );
}

Button.defaultProps = {
    text: 'Button',
    color: 'black',
    align: 'left',
    padding: '10px'
}

Button.propTypes =  {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['black','red']),
    align: PropTypes.oneOf(['left','right']),
    padding: PropTypes.string
}
export default Button;