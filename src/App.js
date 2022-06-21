import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
