import './App.css';
import styles from './App.module.scss';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
