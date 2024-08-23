import './App.css';
import { Navbar } from "./components/MainNavBar/MainNavBar"
import Page1 from "./components/page1/page1"
import Page2 from './components/page2/page2'
import { Route, Routes } from "react-router-dom";
import { MainHeader } from "./components/MainHeader/MainHeader"
import { DataProvider } from './common/DataContextProvider'

function App() {
    return (
        <DataProvider>
        <div className="main-app-container">
            <MainHeader></MainHeader>
            <Navbar></Navbar>
            <Routes>
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
            </div>
        </DataProvider>
    );
}

export default App;