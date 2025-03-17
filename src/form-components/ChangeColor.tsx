import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "pink",
        "purple",
        "white",
        "black",
        "blue",
        "orange",
        "green",
        "brown",
    ];
    const [aColor, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <FormCheck
                    type="radio"
                    name="color"
                    id={`color-check-${color}`}
                    label={color}
                    value={color}
                    checked={aColor === color}
                    onChange={updateColor}
                    key={index}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50%",
                    height: "50%",
                    backgroundColor: aColor,
                }}
            >
                {aColor}
            </div>
        </div>
    );
}
