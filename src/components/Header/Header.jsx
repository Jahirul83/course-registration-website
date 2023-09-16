import PropTypes from 'prop-types';

Header.propTypes = {
    props: PropTypes.object
};

function Header() {

    return (
        <div className='text-center'>
            <h3 className='text-5xl font-semibold'>Course Registration</h3>
        </div>
    );
}

export default Header;