import { useDispatch } from "react-redux";
import { deleteNote} from "../../redux/actions";
import { noteType } from "../../types/reduxTypes";

export default function Note({note, setEditing, closeEditing}: {note: noteType, setEditing: Function, closeEditing: Function}) {
  const dispath = useDispatch();

  const removeNote = (note: noteType) => {
    closeEditing();
    dispath(deleteNote(note));
  }

  return (
    <li className="note-list__item">{note.text}
      <button onClick={() => removeNote(note)} className="note-list__item-btn">Удалить</button>
      <button onClick={() => setEditing(note)} className="note-list__item-btn">Редактировать</button>
    </li> 
  )
}
