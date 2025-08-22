import React from 'react';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import LogoutButton from '../LogoutButton/LogoutButton';

const NavActions = () => {
    return (
        <div className='flex items-center gap-3'>
            <Avatar/>
            <Button to={'/login'}>Login</Button>
            <LogoutButton/>
        </div>
    );
};

export default NavActions;