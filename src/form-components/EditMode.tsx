import React, { useState } from "react";
import Form from "react-bootstrap/Form";
//import { Button } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function switchEditMode() {
        setEditMode(!editMode);
    }
    function switchStudent() {
        setStudent(!student);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={switchEditMode}
                className="form-switch"
                //data-testid="edit-mode-switch"
            />
            {editMode ?
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Edit Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={changeName}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStudentStatus">
                        <Form.Check
                            type="checkbox"
                            id="student-checkbox"
                            label="Student"
                            checked={student}
                            onChange={switchStudent}
                        />
                    </Form.Group>
                </div>
            :   <p>
                    Your {name} is {student ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
