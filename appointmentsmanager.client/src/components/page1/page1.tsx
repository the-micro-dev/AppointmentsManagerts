import { useState } from 'react';
import './page1.css'
import { Page1Tab1 } from './page1tab1/page1tab1'
import Page1Tab3 from './page1tab3/page1tab3'
import Page1Tab2 from './page1tab2/page1tab2'
import Page3Tab1 from './page3tab1/page3tab1'
import Page1Tab4 from './page1tab4/page1tab4'
import Page1Tab5 from './page1tab5/page1tab5'
import Page1Tab6 from './page1tab6/page1tab6'
import Page1Tab8 from './page1tab8/page1tab8'
import Page1Tab7 from './page1tab7/page1tab7'
import Page1Tab9 from './page1tab9/page1tab9'
import Page1Tab10 from './page1tab10/page1tab10'
import Page1Tab11 from './page1tab11/page1tab11'


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
                        className={activeTab === 'subcontent3' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent3')}
                        >
                            Sub Item 3
                    </li>
                    <li
                        className={activeTab === 'subcontent4' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent4')}
                    >
                        Sub Item 4
                    </li>
                    <li
                        className={activeTab === 'subcontent5' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent5')}
                    >
                        Sub Item 5
                    </li>
                    <li
                        className={activeTab === 'subcontent6' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent6')}
                    >
                        Sub Item 6
                    </li>
                    <li
                        className={activeTab === 'subcontent7' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent7')}
                    >
                        Sub Item 7
                    </li>
                    <li
                        className={activeTab === 'subcontent8' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent8')}
                    >
                        Sub Item 8
                    </li>
                    <li
                        className={activeTab === 'subcontent9' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent9')}
                    >
                        Sub Item 9
                    </li>
                    <li
                        className={activeTab === 'subcontent10' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent10')}
                    >
                        Sub Item 10
                    </li>
                    <li
                        className={activeTab === 'subcontent11' ? 'active' : ''}
                        onClick={() => handleTabChange('subcontent11')}
                    >
                        Sub Item 11
                    </li>
                    </ul>
            </div> 
            <div className="subcontent">
                {activeTab === 'subcontent1' && <Page1Tab1 />}
                {activeTab === 'subcontent2' && <Page1Tab2 />}
                {activeTab === 'subcontent3' && <Page1Tab3 />}
                {activeTab === 'subcontent4' && <Page1Tab4 />}
                {activeTab === 'subcontent5' && <Page1Tab5 />}
                {activeTab === 'subcontent6' && <Page1Tab6 />}
                {activeTab === 'subcontent7' && <Page1Tab7 />}
                {activeTab === 'subcontent8' && <Page1Tab8 />}
                {activeTab === 'subcontent9' && <Page1Tab9 />}
                {activeTab === 'subcontent10' && <Page1Tab10 />}
                {activeTab === 'subcontent11' && <Page1Tab11 />}
                {activeTab === 'subcontent5' && <Page3Tab1 />}
                
            </div>
        </div>
    );
}

export default Page1;