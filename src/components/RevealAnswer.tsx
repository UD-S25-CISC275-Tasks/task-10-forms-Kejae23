import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    function revealAnswer(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button onClick={revealAnswer}>Reveal Answer</Button>
            {revealed && <div>42</div>}
        </div>
    );
}
