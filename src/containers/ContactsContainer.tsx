import { NavigationStackProp } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ContactsView } from '../components/ContactsView';
import { CONTACT_ACTIONS } from '../constants/actions';
import { IApp } from '../reducers/appInterface';
import { IContact } from '../reducers/contactsReducer';

interface IMapStateToProps {
    contacts: IContact[];
    navigation: NavigationStackProp;
}

interface IMapDispatchToProps {
    getContacts: () => void;
    setContact: (contact?: IContact) => void;
}

export type IContactsContainerProps = IMapStateToProps & IMapDispatchToProps;

const mapStateToProps = (state: IApp, own: any): IMapStateToProps => {
    return {
        contacts: state.contactsReducer.contacts,
        navigation: own.navigation
    };
};

const mapDispatchToProps = (dispatch: (data: AnyAction) => void): IMapDispatchToProps => {
    return {
        getContacts: () => {
            dispatch({
                type: CONTACT_ACTIONS.GET_CONTACTS
            });
        },
        setContact: contact => {
            dispatch({
                payload: contact,
                type: CONTACT_ACTIONS.SET_CONTACT
            });
        }
    };
};

function mergeProps(stateProps: IMapStateToProps, dispatchProps: IMapDispatchToProps): IContactsContainerProps {
    return {
        ...stateProps,
        ...dispatchProps
    };
}

export default connect<IMapStateToProps, IMapDispatchToProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ContactsView);
