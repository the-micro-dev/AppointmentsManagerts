import React from 'react'
import MainCodes from './codes/MainCodes'
import AgenciesMainCodes from './Agencies/MainCodes'
import { useLocation } from 'react-router-dom'

const Page5Content: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            {pathname === '/codes' &&
                <MainCodes></MainCodes>}
            {pathname === '/agencies' && <AgenciesMainCodes></AgenciesMainCodes>}
        </>
    );
}

const Page5: React.FC = () => (
        <Page5Content />
);

export default Page5;
