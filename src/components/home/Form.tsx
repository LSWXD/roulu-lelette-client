
import type { NextPage } from 'next';


const Form: NextPage = () => {
    return (
        <div>
            <label htmlFor="homeIdInput"></label>
            <input
                type="text"
                name="homeIdInput"
                id="homeIdInput"
            />
        </div>
    );
}

export default Form;
