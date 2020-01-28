import { ActionsObservable } from 'redux-observable';
import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { flatMap } from 'rxjs/operators';
import { CONTACT_ACTIONS } from '../constants/actions';
import { HOST } from '../constants/enviroment';

export const getContacts = (action$: ActionsObservable<any>) =>
    action$.ofType(CONTACT_ACTIONS.GET_CONTACTS).pipe(
        flatMap(() =>
            concat(
                ajax
                    .get(`${HOST}/api/?amount=50&ext`, {
                        'Content-Type': 'application/json'
                    })
                    .pipe(
                        flatMap((response): any => {
                            const data = response.response;
                            return concat(
                                of({
                                    payload: data,
                                    type: CONTACT_ACTIONS.SET_CONTACTS
                                })
                            );
                        })
                    )
            )
        )
    );
