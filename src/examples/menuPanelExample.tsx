import React from "react";
import MenuPanel from "../components/menuPanel";

const MenuPanelExample = () => {
    const groups = [
        {
            key: "JavaScript-Frame",
            title: "JavaScript Frame",
            items: [
                {
                    key: "ReactJs",
                    text: "ReactJs",
                    selected: true,
                    selectedColor: "orange",
                    onClick: (key: React.Key, text: string) => {
                        alert(`key => ${key}  text => ${text}`)
                    }
                },
                {
                    key: "VueJs",
                    text: "VueJs"
                },
                {
                    key: "AngularJs",
                    text: "AngularJs"
                },
                {
                    key: "ExpressJs",
                    text: "ExpressJs"
                },
                {
                    key: "EggJs",
                    text: "EggJs"
                }
            ]
        },
        {
            key: "Web-UI-Frame",
            title: "Web-UI-Frame",
            items: [
                {
                    key: "Antd",
                    text: "Antd",
                },
                {
                    key: "ElementUI",
                    selected: true,
                    selectedColor: "orange",
                    text: "ElementUI"
                },
                {
                    key: "MaterialUI",
                    text: "MaterialUI"
                }
            ]
        }
    ];

    return (
        <div className="example menu-panel-example">
            <h2 className="example-title">MenuPanel</h2>
            <div className="example-body menu-panel-example-content">
                <MenuPanel size="xs" groups={groups} />
                <MenuPanel size="sm" groups={groups} />
                <MenuPanel size="md" groups={groups} />
                <MenuPanel size="lg" groups={groups} />
            </div>
            <div className="example-body menu-panel-example-content">
                <MenuPanel direction="vertical" size="xs" groups={groups} />
                <MenuPanel direction="vertical" size="sm" groups={groups} />
                <MenuPanel direction="vertical" size="md" groups={groups} />
                <MenuPanel direction="vertical" size="lg" groups={groups} />
            </div>
        </div>
    )
};

export default MenuPanelExample;
