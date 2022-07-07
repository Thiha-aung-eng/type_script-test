import * as React from 'react';
import { Notes } from '../models/noets.models';
import Note from './Notes';

interface INotesListsProps {
    notes: Notes[]
    setNotes: React.Dispatch<React.SetStateAction<Notes[]>>
}

const NotesLists: React.FC<INotesListsProps> = ({ notes, setNotes }) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const renderNotes = (): JSX.Element[] => {

        return notes.map(note => {
            return <Note key={note.id} note={note} handleDelete={handleDelete} />
        })

    }

    return (
        <>
            <h2 className='mt-3'>Notes</h2>
            <div>{renderNotes()}</div>
        </>);
};

export default NotesLists;
