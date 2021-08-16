/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx } from '@emotion/react';
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./button.module.css";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
    // const classNames = cx(styles.headerBtn, {
    //     [styles.mainBlackColor] : color === 'black',
    //     [styles.mainRedColor] : color === 'red',
    //     [styles.alignLeft] : align === 'left',
    //     [styles.alignRight] : align === 'right',
    // });

    return ( 
        // <button className={ classNames } onClick={ onClick } > 
        //     { text } 
        // </button>
        <button css={styles.button({ align,color })} onClick={ onClick } > 
            { text } 
        </button>
    );
}

Button.defaultProps = {
    text: 'Button',
    color: 'black',
    align: 'left'
}

Button.propTypes =  {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['black','red']),
    align: PropTypes.oneOf(['left','right'])
}
export default Button;