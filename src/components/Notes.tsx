import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Notes } from '../models/noets.models';

interface INoteProps {

    note: Notes
    handleDelete: (id: string) => void

}

const Note: React.FunctionComponent<INoteProps> = ({ note, handleDelete }) => {
    return (

        <>
            <Card style={{ backgroundColor: note.color }}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.notes}</Card.Text>
                    <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
                    <Button className='mt-3' variant='danger' onClick={() => handleDelete(note.id)}>Delete</Button>

                </Card.Body>
            </Card>
        </>

    );
};

export default Note;
