import { notDeepEqual } from 'assert';
import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Notes } from '../models/noets.models';

interface ICreateNotesProps {

    notes: Notes[]
    setNotes: React.Dispatch<React.SetStateAction<Notes[]>>

}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {

    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const notesRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

        e.preventDefault();

       
        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            notes: (notesRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()


        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (notesRef.current as HTMLTextAreaElement).value = "";
    }

    return (
        <>

            {error && <Alert variant='danger'>{error}</Alert>}
            <h2>Create Notes</h2>

            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>

                <Form.Group className='mt-3' controlId='formBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter Note Title' ref={titleRef} />
                </Form.Group>

                <Form.Group className='mt-3' controlId='formBasicText'>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control placeholder='Enter Notes' as='textarea' rows={3} ref={notesRef} />
                </Form.Group>

                <Form.Group className='mt-3' controlId='formBasicTitle'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control type='color' id="colorInput" defaultValue={'#FFFFFF'} title='Choose Your Color' ref={colorRef} />
                    <Button type='submit' variant='primary'>Create</Button>
                </Form.Group>


            </Form>

        </>
    );
};

export default CreateNotes;
