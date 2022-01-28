import type { NextPage } from 'next'

import Header from './Header'
import Navigation from './Navigation'

import style from './Layout.module.scss';
import React, { FunctionComponent, useEffect, useRef } from 'react';

const Layout: FunctionComponent = ({ children }) => {



    const mainRef = useRef(null);

    useEffect(() => {
        if (!mainRef?.current) return;

        const mainElement: HTMLElement = mainRef.current;
        const widthRatio: number = 16;
        const heightRatio: number = 9;

        const onResize = () => {
            const windowWidth: number = window.innerWidth;
            const windowHeight: number = window.innerHeight;
            const hasLongWidth = windowWidth / widthRatio * heightRatio > windowHeight;

            if (hasLongWidth) {
                const resizedWidth = windowHeight / heightRatio * widthRatio;

                mainElement.style.width = `${resizedWidth}px`;
                mainElement.style.height = `${windowHeight}px`;
            } else {
                const resizedHeight = windowWidth / widthRatio * heightRatio;

                mainElement.style.width = `${windowWidth}px`;
                mainElement.style.height = `${resizedHeight}px`;
            }
        }
        onResize();

        window.addEventListener("resize", onResize);
    }, [mainRef]);

    return (
        <div className={`${style.viewport}`}>
            <main
                className={`${style.display}`}
                ref={mainRef}
            >
                {children}
            </main>
        </div >
    )
}

export default Layout
