import React, { useState } from 'react'
import Approval from './Approval'
import ReviewCodes from './UnArchive'
import { useLocation } from 'react-router-dom'


const Page6Content: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            {pathname === '/directorApproval' && <Approval></Approval>
            }
            {pathname === '/unarchive' && <ReviewCodes></ReviewCodes>}
        </>
    );
}

const Page6: React.FC = () => (
    <Page6Content />
);

export default Page6;
