import './App.css';
import { Navbar } from "./components/MainNavBar/MainNavBar"
import Page1 from "./components/page1/page1"
import Page2 from './components/page2/page2'
import Page5 from './components/page5/page5'
import Page6 from './components/page6/page6'
import { Route, Routes } from "react-router-dom";
import { MainHeader } from "./components/MainHeader/MainHeader"
import { DataProvider } from './common/DataContextProvider'
import Page7 from './components/page7/page7'
import Page8 from './components/page8/page8'

function App() {
    return (
        <DataProvider>
            <div className="main-app-container">
                <MainHeader></MainHeader>
                <Navbar></Navbar>
                <Routes>
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/codes" element={<Page5 />} />
                        <Route path="/agencies" element={<Page5 />} />
                        <Route path="/unarchive" element={<Page6 />} />
                        <Route path="/directorApproval" element={<Page6 />} />
                        <Route path="/reports" element={<Page7 />} />
                        <Route path="/contracts" element={<Page8 />} />
                </Routes>
            </div>
        </DataProvider>
    );
}

export default App;