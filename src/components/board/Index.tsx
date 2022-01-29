import type { NextPage } from 'next';

import Layout from 'components/common/Layout';

const Index: NextPage = () => {
    return (
        <Layout>
            <div className="titleContainer">
                <h1 className="boardTitle"></h1>
            </div>
            <div className="boardItemContainer">
                <div className="boardItem">
                    
                </div>
            </div>
        </Layout>
    );
}

export default Index;
