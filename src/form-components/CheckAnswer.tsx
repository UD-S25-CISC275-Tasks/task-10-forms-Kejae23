import React, { useState } from "react";
//import { FormCheck } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [input, setInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }
    const isCorrect = input === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Check</Form.Label>
                <Form.Control
                    type="text"
                    value={input}
                    onChange={updateInput}
                />
            </Form.Group>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
