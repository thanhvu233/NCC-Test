import { useContext } from 'react';
import { SetToggleContext, ToggleContext } from '../App';
import logo from '../assets/images/nccLogo.png';
import styles from './Logo.module.scss';

function Logo() {
    const toggle = useContext(ToggleContext);
    const setToggle = useContext(SetToggleContext);

    const onToggle = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

    return (
        <div className={styles.logo}>
            <img src={logo} alt='NCC-Logo' />
            <div className={styles.menuToggle} onClick={onToggle}>
                <i className={`${styles.icon} las la-bars`}></i>
            </div>
        </div>
    );
}

export default Logo;
