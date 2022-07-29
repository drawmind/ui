import React from "react";
import NumberInput from "../components/numberInput";

const NumberInputExample = () => {
    return (
        <div className="example number-input-example">
            <h2 className="example-title">NumberInput</h2>
            <div className="example-body number-input-example-content">
                <NumberInput size="xs" placeholder="input some words..." />
                <NumberInput size="sm" />
                <NumberInput size="md" />
                <NumberInput size="lg" disabled />
            </div>
        </div>
    );
};

export default NumberInputExample;
