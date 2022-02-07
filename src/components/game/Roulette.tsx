import type { NextPage } from 'next';

import Slot from './Slot';

import style from './Roulette.module.scss';

const Roulette: NextPage = () => {
    const onClickButton = () => { }


    return (
        <div className={style.roulette}>
            <div className={style.slots}>
                <Slot />
                <Slot />
                <Slot />
            </div>
            <div className={style.buttonContainer}>
                <button
                    className={style.button}
                    onClick={onClickButton}
                >
                    룰렛 돌리기

                </button>
            </div>
        </div>
    );
}

export default Roulette;
