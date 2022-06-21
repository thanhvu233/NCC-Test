import React from 'react';
import styles from './Logo.module.scss';
import logo from '../assets/images/nccLogo.png';

function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logo} alt='NCC-Logo' />
        </div>
    );
}

export default Logo;
