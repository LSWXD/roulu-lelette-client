import type { NextPage } from 'next';

import style from './Form.module.scss';

const Form: NextPage = () => {
    return (
        <form className="form">
            <label htmlFor="homeIdInput"></label>
            <input
                type="text"
                name="homeIdInput"
                id="homeIdInput"
            />
        </form>
    );
}

export default Form;
