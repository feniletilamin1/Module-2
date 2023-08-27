export type ActionType = {
    type: string,
    note: noteType,
    filter?: string,
}

export type StateType = {
    noteList: noteType[]
}

export type actionTypes = {
    ADD_NOTE: string,
    DELETE_NOTE: string,
    UPDATE_NOTE: string,
}

export type noteType = {
    id: string,
    text: string,
}