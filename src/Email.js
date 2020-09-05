import React, { useState } from "react";
import "./index.css";

const emailValidator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Email = ({ handleInputChange, email }) => {
    const [error, setError] = useState("");

    //validating Email input field

    const validateEmail = (name) => {
        if (name.trim().length === 0) setError("Email Required");
        else if (!emailValidator.test(name)) setError("Email is not valid");

    };



    return (
        <>
            <label>Email</label>
            <input
                type="email"
                placeholder="eddardstark@winterfell.com"
                name="email"
                value={email}
                onChange={handleInputChange}
                onBlur={(e) => validateEmail(e.target.value)}
            />
            {error && <p>{error}</p>}
        </>
    );
};

export default Email;
