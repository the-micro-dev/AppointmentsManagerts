import './page2.css'
import { Page2Tab1 } from './page2tab1/page2tab1'
import Page2Tab2 from './page2tab2/page2tab2'
import Page2Tab3 from './page2tab3/page2tab3'
import Page2Tab4 from './page2tab4/page2tab4'
import Page2Tab5 from './page2tab5/page2tab5'
import Page2Tab6 from './page2tab6/page2tab6'
import { TabProvider, useTab } from '../../common/TabContextProvider'


const Page2Content: React.FC = () => {
    const { activeTab, setActiveTab } = useTab(); // Local state to manage active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="page2">
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
                {activeTab === 'subcontent1' && <Page2Tab1 />}
                {activeTab === 'subcontent2' && <Page2Tab2 />}
                {activeTab === 'subcontent3' && <Page2Tab3 />}
                {activeTab === 'subcontent4' && <Page2Tab4 />}
                {activeTab === 'subcontent5' && <Page2Tab5 />}
                {activeTab === 'subcontent6' && <Page2Tab6 />}

            </div>
        </div>
    );
}

const Page2: React.FC = () => (
    <TabProvider>
        <Page2Content />
    </TabProvider>
);

export default Page2;