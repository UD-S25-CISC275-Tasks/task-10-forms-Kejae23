import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "New Year's Day 🎆"
        | "Christmas 🎄"
        | "Halloween 🎃"
        | "Thanksgiving 🦃"
        | "Independence Day 🎇";

    const [holiday, setHoliday] = useState<Holiday>("New Year's Day 🎆");

    const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
        "Christmas 🎄": "Halloween 🎃",
        "Halloween 🎃": "Independence Day 🎇",
        "Independence Day 🎇": "New Year's Day 🎆",
        "New Year's Day 🎆": "Thanksgiving 🦃",
        "Thanksgiving 🦃": "Christmas 🎄",
    };
    const TIME_TRANSITIONS: Record<Holiday, Holiday> = {
        "New Year's Day 🎆": "Independence Day 🎇",
        "Independence Day 🎇": "Halloween 🎃",
        "Halloween 🎃": "Thanksgiving 🦃",
        "Thanksgiving 🦃": "Christmas 🎄",
        "Christmas 🎄": "New Year's Day 🎆",
    };

    function changeHolidayAlphabet(): void {
        const newHoliday = ALPHABET_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayTime(): void {
        const newHoliday = TIME_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }
    //1 button cycle through holidays alphabe
    //1 button cycle through holidays by time of year
    return (
        <div>
            <Button onClick={changeHolidayTime}>Advance by Year</Button>
            <Button onClick={changeHolidayAlphabet}>Advance by Alphabet</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
