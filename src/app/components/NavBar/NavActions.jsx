'use client'
import { useSession } from 'next-auth/react';
import React from 'react';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import LogoutButton from '../LogoutButton/LogoutButton';

const NavActions = () => {
    const session = useSession()
    const user = session?.data?.user
    return (
        <div className='flex items-center gap-3'>
            {
                user
                    ? <>
                        <Avatar image={user?.imageLink} />
                        <LogoutButton />
                    </>
                    : <Button to={'/login'}>Login</Button>
            }
        </div>
    );
};

export default NavActions;