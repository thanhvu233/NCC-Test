import { useContext } from 'react';
import { ToggleContext } from '../App';
import styles from './Sidebar.module.scss';
import './Sidebar.scss';

function Sidebar() {
    // true: sidebar hiện
    // false: sidebar ẩn
    const toggle = useContext(ToggleContext);

    return (
        <div className={toggle ? `${styles.sidebar} show` : `${styles.sidebar} hide`}>
            <ul className={styles.options}>
                <li className={`${styles.optionItem}`}>
                    <a href='' className='active'>
                        Home
                    </a>
                </li>
                <li className={styles.optionItem}>
                    <a href=''>Services</a>
                </li>
                <li className={styles.optionItem}>
                    <a href=''>News</a>
                </li>
                <li className={styles.optionItem}>
                    <a href=''>Blog</a>
                </li>
                <li className={styles.optionItem}>
                    <a href=''>Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
