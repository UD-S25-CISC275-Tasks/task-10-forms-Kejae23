import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function beginQuiz(): void {
        if (attempts > 0) {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    }
    function addAttempt(): void {
        setAttempts(attempts + 1);
        //or lastAttempt=>lastAttempt+1
    }
    function stopQuiz(): void {
        setProgress(false);
    }

    return (
        <div>
            <h2>Attempts: {attempts}</h2>
            <Button onClick={beginQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={attempts >= 10 || progress}>
                Mulligan
            </Button>
        </div>
    );
}
