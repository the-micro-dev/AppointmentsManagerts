import { useState } from 'react';
import './page1.css'
import { Page1Tab1 } from './page1tab1/page1tab1'
import { Page1Tab2 } from './page1tab2/page1tab2'
import  Page3Tab1  from './page3tab1/page3tab1'

const Page1 = () => {
    const [activeTab, setActiveTab] = useState('subcontent1'); // Local state to manage active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="page1">
            <div className="sub-navbar">
                    <ul>
                        <li
                            className={activeTab === 'subcontent1' ? 'active' : ''}
                            onClick={() => handleTabChange('subcontent1')}
                        >
                            Sub Item 1
                        </li>
                        <li
                            className={activeTab === 'subcontent2' ? 'active' : ''}
                            onClick={() => handleTabChange('subcontent2')}
                        >
                            Sub Item 2
                        </li>
                        <li
                            className={activeTab === 'vendor' ? 'active' : ''}
                            onClick={() => handleTabChange('vendor')}
                        >
                            Sub Item 3
                        </li>
                    </ul>
            </div>
            <div className="subcontent">
                {activeTab === 'subcontent1' && <Page1Tab1 />}
                {activeTab === 'subcontent2' && <Page1Tab2 />}
                {activeTab === 'vendor' && <Page3Tab1 />}
            </div>
        </div>
    );
}

export default Page1;