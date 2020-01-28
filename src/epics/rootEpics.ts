import { combineEpics } from 'redux-observable';

import { getContacts } from './contactsEpic';

export default () => combineEpics<any>(getContacts);
