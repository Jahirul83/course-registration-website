import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    props: PropTypes.object
};

function Header() {
    return (
        <div>
            <h3 className='text-5xl'>Header component</h3>
        </div>
    );
}

export default Header;