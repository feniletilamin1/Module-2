import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './Components/Form';
import NotesList from './Components/Notes/NotesList';

function App() {
  const requestUrl = "http://localhost:7070/notes";

  function getCards(requestUrl) {
    fetch(requestUrl)
    .then(res => res.json())
    .then((result) => {
        setCards({
          items: result,
          loading: false,
          eror: false
        });
      },
      (eror) => {
        setCards({
          items: null,
          loading: false,
          eror: eror
        });
      }
    );
  }

  function addNote(note) {
    try {
      fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json/charset=utf-8'
        },
        body: JSON.stringify(note)
      });
      getCards(requestUrl);
    } catch (eror) {
      setCards({
          items: [cards.items],
          loading: false,
          eror: true,
        }
      );
    }
  }

  function deleteNote(id) {
    try {
      fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE' });
      getCards(requestUrl);
    } catch (error) {
      console.error(error);
    }
  }
  
  const [cards, setCards] = useState({
    items: [],
    loading: true,
    eror: false,
  });

  function refreshNotes() {
    setCards({
      items: [],
      loading: true,
      eror: false,
    });
    getCards(requestUrl);
  }

  
  useEffect(() => {
    getCards(requestUrl);
  }, []);

  return (
    <div className="container">
        <button onClick={refreshNotes}>Обновить данные</button>
        <Form onSubmit={addNote}/>
        {cards.loading &&
          <p>Loading...</p>
        }
        {!cards.loading &&
          <NotesList notes={cards.items} onDelete={deleteNote}/>
        }
        {cards.eror &&
          <p>Ошибка : {cards.eror}</p>
        }
    </div>
  );
}

export default App;
