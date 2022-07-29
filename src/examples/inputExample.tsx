import React from "react";
import Input from "../components/input";

const InputExample = () => {
    return (
        <div className="example input-example">
            <h2 className="example-title">Input</h2>
            <div className="example-body input-example-content">
                <Input size="xs" placeholder="input some words..." />
                <Input size="sm" />
                <Input size="md" />
                <Input size="lg" disabled />
            </div>
        </div>
    );
};

export default InputExample;
