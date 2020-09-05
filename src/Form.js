import React from 'react';
import Name from './Name';
import Email from './Email';


function Form() {

    const initialInputState = {
        name: "",
        email: ""
    };

    const [eachInput, setEachInput] = useState(initialInputState);

    const { name, email } = eachInput;
    const handleInputChange = (e) => {
        setEachInput({ ...eachInput, [e.target.name]: e.target.value });
    };


    return (
        <form onSubmit={handleSubmit}>
            <Name
                handleInputChange={handleInputChange}
                firstName={name}
            />

            <Email
                handleInputChange={handleInputChange}
                email={email}

            />
            <button type="submit">
                Download
          </button>
        </form>
    )
}

export default Form
