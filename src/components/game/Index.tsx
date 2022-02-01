import type { NextPage } from 'next';

import Layout from 'components/common/Layout';

import style from './Index.module.scss';
import { useMemo } from 'react';

const Index: NextPage = () => {
    const slot1 = useMemo(() => {
        const minRotation: number = 5;
        const maxRotation: number = 10;
        const rotation: number = Math.floor(Math.random() * maxRotation);
        const rotator = new Array(rotation).fill(true);
        const slotItems = [
            {
                name: "시공 좋아",
            },
            {
                name: "Yee"
            },
            {
                name: "Pop cat"
            },
            {
                name: "이차는 제껍니다"
            }
        ];

        return rotator.map((_) => {
            return slotItems.map((slotItem, index) => {
                const name = slotItem.name;
                return (
                    <div
                        key={name}
                        className={style.slotItem}
                    >
                        {name}
                    </div>
                )
            });
        });
    }, []);


    return (
        <Layout>
            <div className={style.rouletteContainer}>
                <div className={style.roulette}>
                    <div className={style.rouletteSlot}>
                        {slot1}
                    </div>
                    <div className={style.rouletteSlot}>
                        {slot1}
                    </div>
                    <div className={style.rouletteSlot}>
                        {slot1}
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button}>룰렛 돌리기</button>
                </div>
            </div>
        </Layout>
    );
}

export default Index;
