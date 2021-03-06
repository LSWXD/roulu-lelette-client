/* package */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';

/* component */
import Link from 'next/link';

/* style */
import style from './Index.module.scss';
import Layout from 'components/common/Layout';

const Index: ReactNode = () => {
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

    return (
        <Layout
        >
            <div className={style.mainContainer}>
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
        </Layout>
    );
}


export default Index;