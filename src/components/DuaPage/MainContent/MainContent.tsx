import React from 'react';
import SectionContent from '../SectionContent/SectionContent';
import SectionHead from '../SectionHead/SectionHead';

const MainContent = () => {
    return (
        <div className='h-[calc(100vh-180px)] w-full overflow-y-auto space-y-5'>
            <SectionHead />
            <SectionContent />
        </div>
    );
};

export default MainContent;