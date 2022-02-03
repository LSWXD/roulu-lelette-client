import type { NextPage } from 'next';

import Layout from 'components/common/Layout';

import style from './Index.module.scss';
import { useEffect, useMemo, useRef } from 'react';
import Roulette from './Roulette';

const Index: NextPage = () => {
    return (
        <Layout>
            <div className={style.rouletteContainer}>
                <Roulette />
            </div>
        </Layout>
    );
}

export default Index;
