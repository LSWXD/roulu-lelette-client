import type { NextPage } from 'next';

import Layout from 'components/common/Layout';

import style from './Index.module.scss';

const Index: NextPage = () => {
    return (
        <Layout>
            <div className={style.rouletteContainer}>
                <div className={style.roulette}>
                    <div className={style.rouletteSlot}>
                        슬롯 1
                    </div>
                    <div className={style.rouletteSlot}>
                        슬롯 2
                    </div>
                    <div className={style.rouletteSlot}>
                        슬롯 3
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
