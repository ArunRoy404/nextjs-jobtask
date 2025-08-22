import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar/DashboardSidebar';

const layout = ({ children }) => {
    return (
        <div className='w-full'>
            <DashboardSidebar />
            <div className='lg:w-[calc(100%-255px)] ml-auto transition-all duration-300'>
                <div className='mx-4'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;