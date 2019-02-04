import React from 'react';
import PropTypes from 'prop-types'

const icons = {
    'search': 'M12.5,11 L11.71,11 L11.43,10.73 C12.41,9.59 13,8.11 13,6.5 C13,2.91 10.09,0 6.5,0 C2.91,0 0,2.91 0,6.5 C0,10.09 2.91,13 6.5,13 C8.11,13 9.59,12.41 10.73,11.43 L11,11.71 L11,12.5 L16,17.49 L17.49,16 L12.5,11 Z M6.5,11 C4.01,11 2,8.99 2,6.5 C2,4.01 4.01,2 6.5,2 C8.99,2 11,4.01 11,6.5 C11,8.99 8.99,11 6.5,11 Z'
};

const Icon = props => (
    <svg width="22" height="22" viewBox="0 0 24 24">
        <path d={icons[props.icon]} />
    </svg>
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default Icon;

