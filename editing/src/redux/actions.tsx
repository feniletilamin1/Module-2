import {v4 as uuidv4} from 'uuid';
import actions from './actionEnum';
import { ActionType, noteType } from '../types/reduxTypes';

export function addNote(text: string): ActionType {
    return {
        type: actions.ADD_NOTE,
        note: {
            id: uuidv4(),
            text: text,
        }
    }
}

export function deleteNote(note: noteType): ActionType {
    return {
        type: actions.DELETE_NOTE,
        note: note,
    }
}

export function updateNote(note: noteType): ActionType {
    return {
        type: actions.UPDATE_NOTE,
        note: note,
    }
}
