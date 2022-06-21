import React, { useState } from 'react';
import './App.css';
import styles from './App.module.scss';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

export const ToggleContext = React.createContext();
export const SetToggleContext = React.createContext();

function App() {
    // true: sidebar hiện
    // false: sidebar ẩn
    const [toggle, setToggle] = useState(false);

    return (
        <div className={styles.app}>
            <ToggleContext.Provider value={toggle}>
                <SetToggleContext.Provider value={setToggle}>
                    <Sidebar />
                    <Main />
                </SetToggleContext.Provider>
            </ToggleContext.Provider>
        </div>
    );
}

export default App;
