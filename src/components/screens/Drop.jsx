import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

function Drop() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <DropContainer>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </DropContainer>
    );
}
export default Drop;

const DropContainer = styled.div`
    cursor: pointer;
`;
