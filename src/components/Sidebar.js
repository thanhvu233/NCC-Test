import React from 'react';
import styles from './Sidebar.module.scss';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
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
