import { ActionType, noteType} from "../types/reduxTypes";
import actions from "./actionEnum";

const initialState: noteType[] = [];

function notesReducer(state = initialState, action: ActionType): noteType[] {
    let newNotes: noteType[] = structuredClone(state);
    switch (action.type) {
        case actions.ADD_NOTE: {
            newNotes.push(action.note);
            return newNotes;
        }
        case actions.UPDATE_NOTE: {
            const indexNote = state.indexOf(action.note);
            if(indexNote !== -1) {
                newNotes[indexNote].text = action.note.text;
            }
            return newNotes;
        }
        case actions.DELETE_NOTE: {
            newNotes = state.filter(item => item.id !== action.note.id);
            return newNotes;
        }
        default: {
            return state;
        }
    }   
}

export default notesReducer;