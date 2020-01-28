import { AnyAction } from 'redux';
import { CONTACT_ACTIONS } from '../constants/actions';

export interface IContact {
    name?: string;
    surname?: string;
    photo?: string;
    phone?: string;
    email?: string;
}

export interface IContactsReducer {
    contact: IContact;
    contacts: IContact[];
}

const contactsReducerState: IContactsReducer = {
    contact: {
        name: '',
        surname: '',
        photo: '',
        phone: '',
        email: ''
    },
    contacts: []
};

export default (state: IContactsReducer = contactsReducerState, action: AnyAction): IContactsReducer => {
    switch (action.type) {
        case CONTACT_ACTIONS.SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case CONTACT_ACTIONS.SET_CONTACT:
            return {
                ...state,
                contact: action.payload
            };
        default:
            return state;
    }
};
