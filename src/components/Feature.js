import React from 'react';
import styles from './Feature.module.scss';
import cssImg from '../assets/images/cssIcon.png';
import htmlImg from '../assets/images/htmlIcon.png';
import urlImg from '../assets/images/urlIcon.png';

function Feature() {
    return (
        <div className={styles.featureList}>
            <div className={styles.item}>
                <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
                <img src={cssImg} alt='css image' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec
                    feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat
                    condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                </p>
            </div>
            <div className={styles.item}>
                <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
                <img src={htmlImg} alt='html image' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec
                    feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat
                    condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                </p>
            </div>
            <div className={styles.item}>
                <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
                <img src={urlImg} alt='url image' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec
                    feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat
                    condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                </p>
            </div>
        </div>
    );
}

export default Feature;
