import React from "react";
import "./App.scss";
import MenuPanelExample from "./examples/menuPanelExample";
import ButtonExample from "./examples/buttonExample";
import InputExample from "./examples/inputExample";
import HeaderExample from "./examples/headerExample";
import NumberInputExample from "./examples/numberInputExample";
import BaseDropdownMenuExample from "./examples/baseDropdownMenuExample";
import DropdownMenuExample from "./examples/dropdownMenuExample";

const App = () => {
    return (
        <>
            <div>
                <ButtonExample />
                <InputExample />
                <NumberInputExample />
                <HeaderExample />
                <MenuPanelExample />
                <BaseDropdownMenuExample />
                <DropdownMenuExample />
            </div>
        </>
    );
};

export default App;
