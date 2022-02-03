import type { NextPage } from 'next';

import Slot from './Slot';

import style from './Roulette.module.scss';

const Roulette: NextPage = () => {

    return (
        <div className={style.roulette}>
            <div className={style.slots}>
                <Slot />
                <Slot />
                <Slot />
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button}>룰렛 돌리기</button>
            </div>
        </div>
    );
}

export default Roulette;
