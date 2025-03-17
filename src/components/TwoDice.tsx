import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
// 1 1 loose
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [LDie, setLDie] = useState<number>(1);
    const [RDie, setRDie] = useState<number>(2);

    function leftDie() {
        setLDie(d6());
    }
    function rightDie() {
        setRDie(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{LDie}</span>
            <span data-testid="right-die">{RDie}</span>
            <div>
                <Button onClick={leftDie}>Roll Left</Button>
                <Button onClick={rightDie}>Roll Right</Button>
            </div>
            {LDie === RDie && LDie !== 1 && <p>You Win! </p>}
            {LDie === RDie && LDie === 1 && <p>You Lose!</p>}
        </div>
    );
}
