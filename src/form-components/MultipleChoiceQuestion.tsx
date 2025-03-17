import React, { useState } from "react";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);
    const isCorrect = currentChoice === expectedAnswer;

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <label htmlFor="options">Choose an answer:</label>
            <select id="options" value={currentChoice} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
