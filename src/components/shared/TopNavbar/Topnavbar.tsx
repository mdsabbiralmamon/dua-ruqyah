import React from 'react';
import Search from '../Search/Search';

const Topnavbar = () => {
    return (
        <div className='w-full h-16 flex items-center justify-between'>
           <h1 className='text-2xl font-semibold'>Dua Page</h1>
           {/* search bar */}
           <Search />
        </div>
    );
};

export default Topnavbar;