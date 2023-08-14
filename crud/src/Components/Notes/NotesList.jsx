import React from 'react'
import Note from './Note';

export default function NotesList(props) {
    const { onDelete, notes } = props;
    if (notes.length === 0)
        return (
            <p>Заметок нет</p>
        )
    return (
        <ul className="notes-list">
            {notes.map(note =>
                <Note key={note.id} id={note.id} text={note.content} onDelete={onDelete} />
            )}
        </ul>
    )
}
