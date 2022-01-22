import type { NextPage } from 'next';

import Link from 'next/link';
import style from './index.module.scss';

const Index: NextPage = () => {
    return (
        <main className={style.main}>
            <h1 className={style.title}>
                룰루렐렛
            </h1>
            <input
                className={style.formInput}
                type="text"
                name="homeIdInput"
                id="homeIdInput"
                placeholder="id 입력"
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
        </main>
    );
}

export default Index;