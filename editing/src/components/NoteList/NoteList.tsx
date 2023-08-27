import { noteType } from '../../types/reduxTypes';
import Note from './Note';

type NoteListProps = {
    notesList: noteType[]
    setEditing: Function,
    closeEditing: Function,
}

export default function NoteList(props: NoteListProps) {
    const {closeEditing, setEditing, notesList } = props;
    return (
        <ul className="note-list">
            {notesList &&
            notesList.map(note =>
                <Note closeEditing={closeEditing} setEditing={setEditing} key={note.id} note={note}/>  
            )}
            {notesList.length === 0 && <p>Заметки отсутствуют</p>}
        </ul>
    )
}
