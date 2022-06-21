import React, { useState } from 'react';
import styles from './Main.module.scss';
import Logo from './Logo';
import Description from './Description';
import Feature from './Feature';
import Footer from './Footer';
import Container from './Container';

function Main() {

    return (
        <div className={styles.main}>
            <Container>
                {/* Logo Section */}
                <Logo />
                {/* Description Section */}
                <Description />
                {/* Feature Section */}
                <Feature />
            </Container>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default Main;
