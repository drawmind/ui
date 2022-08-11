import React from "react";
import { createRoot } from "react-dom/client";
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

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

export default App;
