import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ActionType, StateType, noteType } from './types/reduxTypes';
import { Dispatch, FormEvent, useEffect, useRef, useState } from 'react';
import { addNote, updateNote } from './redux/actions';
import NoteList from './components/NoteList/NoteList';

function App() {
  const dispath = useDispatch();
  const notes = useSelector((state: StateType) => state.noteList);
  const inputTarget = useRef(null);
  const inputFilterTarget = useRef(null);
  const filtered = useRef(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [updatedNote, setUpdatedNote] = useState<noteType>({ id: "0", text: ""});
  const [filterNotes, setFilterNotes] = useState<noteType[]>([]);
  let inputElement: HTMLInputElement | null = null;
  let inputFilter: HTMLInputElement | null = null;


  useEffect(() => {
      // eslint-disable-next-line
      inputFilter = inputFilterTarget.current;
      // eslint-disable-next-line
      inputElement = inputTarget.current;
  }, [notes, updatedNote, editing, filterNotes])

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if(editing && updateNote !== null) {
      updatedNote.text =  (inputElement as any).value;
      dispath(updateNote(updatedNote));
      setEditing(false);
    }
    else {
      dispath(addNote((inputElement as any).value));
    }
  }
  const onEditing = (note: noteType) => {
    if(inputElement)
      inputElement.value = note.text;
    setEditing(true);
    setUpdatedNote(note);
  }

  const closeEdit = () => {
      setEditing(false);
      if(inputElement)
        inputElement.value = "";
  }

  const onFilterChange = () => {
    if(inputFilter && inputFilter.value.length > 0 ){
      filtered.current = true;
      const filter = inputFilter.value;
      let newNotes: noteType[] = notes.filter(note => note.text.includes(filter));
      setFilterNotes(newNotes);
    }
    else {
      filtered.current = false;
      setFilterNotes(notes);
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e: FormEvent) =>{submitForm(e)}} className="add-note-form">
      <label htmlFor="text" className="add-note-form__label">Текст заметки</label>
        <input id="text" required ref={inputTarget} type="text" className="add-note-form__input" />
        <label htmlFor="filter" className="add-note-form__label">Фильтр</label>
        <input ref={inputFilterTarget} id="filter" onChange={onFilterChange} type="text" className="add-note-form__input" />
        <button type="submit" className="add-note-form__submit">Save</button>
        {editing && <button onClick={closeEdit} type="submit" className="add-note-form__submit">Cancel</button>}
      </form>
      <NoteList closeEditing={closeEdit} setEditing={onEditing} notesList={!filtered.current ? notes : filterNotes}/> 
    </div>
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    notesList: state.noteList
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);

