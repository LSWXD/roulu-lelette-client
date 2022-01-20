import type { NextPage } from 'next';

import Layout from 'components/common/Layout';
import Title from './Title';
import Form from './Form';
import ScoreBoardLink from './ScoreBoardLink';
import UnitIntroLink from './UnitIntroLink';

const Index: NextPage = () => {
    return (
        <Layout>
            <Title />
            <Form />
            <div>
                <ScoreBoardLink />
                <UnitIntroLink />
            </div>
        </Layout>
    );
}

export default Index;