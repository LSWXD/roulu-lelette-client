/* package */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

/* component */
import Link from 'next/link';

/* style */
import style from './Index.module.scss';

const Index: NextPage = () => {
    const router = useRouter();

    const mainRef = useRef(null);

    const [id, setId] = useState<string>("");
    const [viewport, setViewport] = useState<{ width: number, height: number }>({ width: 0, height: 0 });

    const onChangeInput = (event: any) => {
        const target: any = event.target;
        const value: string = target.value;

        setId(value);
    }

    const onKeyDownInput = (event: any) => {
        const ENTER = 13;
        if (event.keyCode === ENTER) {
            setId("");
            router.push('/game');
        }
    }



    useEffect(() => {
        if (!mainRef?.current) return;
        const mainElement: HTMLElement = mainRef.current;

        mainElement.style.background = "black";

        const onResize = (entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
            entries.forEach((entry: ResizeObserverEntry) => {
                if (entry.target === mainElement) {
                    const width: number = mainElement.offsetWidth;
                    const height: number = mainElement.offsetHeight;
                    const isPortrait: boolean = width < height;

                    if (isPortrait) {
                        mainElement.style.width = `${window.innerWidth}px`;

                        const newHeight: number = Number(window.innerWidth) / 16 * 9;
                        mainElement.style.height = `${newHeight}px`;
                    } else {
                        mainElement.style.height = `${window.innerHeight}px`;

                        const newWidth: number = Number(window.innerHeight) / 9 * 16;
                        mainElement.style.width = `${newWidth}px`;
                    }

                    console.log(mainElement.style.height);
                    console.log(mainElement.style.width);
                }
            })
        }
        const resizeObserver = new ResizeObserver(onResize);

        resizeObserver.observe(mainElement);
    }, [mainRef]);


    return (
        <main
            className={style.main}
            ref={mainRef}
        >
            <div className={style.viewport}>
                <h1 className={style.title}>
                    룰루렐렛
                </h1>
                <input
                    className={style.formInput}
                    type="text"
                    name="homeIdInput"
                    id="homeIdInput"
                    placeholder="id 입력"
                    value={id}
                    onChange={onChangeInput}
                    onKeyDown={onKeyDownInput}
                />
                <div className={style.linkContainer}>
                    <Link href="/board">
                        <a className={style.link}>
                            스코어 보드
                        </a>
                    </Link>
                    <Link href="/unit">
                        <a className={style.link}>
                            유닛 소개
                        </a>
                    </Link>
                </div>
            </div>
        </main>
    );
}


export default Index;