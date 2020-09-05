import React, { useState } from "react";


const Name = ({ handleInputChange, name }) => {
    const [error, setError] = useState("");

    // validating First Name field

    const validateFirstName = (name) => {
        if (name.trim().length === 0) {
            setError("First Name is required");
        } else if (name.length > 30) {
            setError("Exceeding Character limit");
        } else setError("");

    };

    return (
        <>
            <label>Name</label>
            <input
                type="text"
                placeholder="Eddard"
                name="firstName"
                value={name}
                onChange={handleInputChange}
                onBlur={(e) => validateFirstName(e.target.value)}
            />
            {error && <p>{error}</p>}
        </>
    );
};

export default Name;
