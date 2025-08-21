import React from 'react';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avaatr';

const NavActions = () => {
    return (
        <div className='flex items-center gap-3'>
            <Avatar/>
            <Button to={'/login'}>Login</Button>
        </div>
    );
};

export default NavActions;