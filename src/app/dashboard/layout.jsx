import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';

const layout = ({ children }) => {
    return (
        <div className='py-30'>
            {children}
        </div>
    );
};

export default layout;