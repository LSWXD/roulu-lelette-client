import { useMemo } from 'react';
import type { NextPage } from 'next';

import Layout from 'components/common/Layout';

import style from './Index.module.scss';

const Index: NextPage = () => {
    const boardItems = [
        {
            userId: "아이디1",
            ranking: 1,
            score: 1000
        },
        {
            userId: "아이디2",
            ranking: 2,
            score: 100
        },
        {
            userId: "아이디3",
            ranking: 3,
            score: 10
        },
        {
            userId: "아이디4",
            ranking: 4,
            score: 1
        }
    ];

    const items = useMemo(() => {
        return boardItems.map((boardItem, index) => {
            return (
                <div
                    className={style.item}
                    key={boardItem.userId}
                >
                    <div className={style.userId}>{boardItem.userId}</div>
                    <div className={style.ranking}>{boardItem.ranking}</div>
                    <div className={style.score}>{boardItem.score}</div>
                </div>
            );
        });
    });

    return (
        <Layout>
            <div className={style.boardContainer}>
                <div className={style.titleContainer}>
                    <h1 className={style.boardTitle}>스코어 보드</h1>
                </div>
                <div className={style.boardItems}>
                    <div className={style.item}>
                        <div className={style.userId}>유저 아이디</div>
                        <div className={style.ranking}>랭킹</div>
                        <div className={style.score}>점수</div>
                    </div>
                    {items}
                </div>
            </div>
        </Layout>
    );
}

export default Index;
