import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import NumberInput from "./components/numberInput";
import "./App.scss";

const App = () => {
    return (
        <>
            <div>
                <div className="button-example">
                    <h2>Button</h2>
                    <div className="button-exmple-content">
                        <Button size="xs" onClick={() => alert("xs button")}>Mind Draw</Button>
                        <Button size="sm" onClick={() => alert("sm button")}>Mind Draw</Button>
                        <Button size="md" onClick={() => alert("md button")}>Mind Draw</Button>
                        <Button size="lg" onClick={() => alert("md button")} disabled>Mind Draw</Button>
                    </div>
                </div>
                <div className="input-example">
                    <h2>Input</h2>
                    <div className="input-example-content">
                        <Input size="xs" placeholder="input some words..."/>
                        <Input size="sm" />
                        <Input size="md" />
                        <Input size="lg" disabled />
                    </div>
                </div>
                <div className="number-input-example">
                    <h2>NumberInput</h2>
                    <div className="number-input-example-content">
                        <NumberInput size="xs" placeholder="input some words..."/>
                        <NumberInput size="sm" />
                        <NumberInput size="md" />
                        <NumberInput size="lg" disabled />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
