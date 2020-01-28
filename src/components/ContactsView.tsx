import * as React from 'react';
import styled from 'styled-components/native';
import { IContactsContainerProps } from '../containers/ContactsContainer';
import { IContact } from '../reducers/contactsReducer';
import { ContactComponent } from './ContactComponent';

const ViewContainer = styled.ScrollView`
    flex: 1;
    background-color: #ffffff;
`;

export class ContactsView extends React.Component<IContactsContainerProps, any> {
    public componentDidMount() {
        this.props.getContacts();
    }

    public onClickContact = (contact: IContact) => {
        this.props.setContact(contact);
        this.props.navigation.navigate('DetailContact', { name: contact.name });
    };

    public render() {
        const { contacts } = this.props;
        const ContactsComponent = contacts.map((contact, key) => (
            <ContactComponent
                key={key}
                photo={contact.photo}
                name={contact.name}
                surname={contact.surname}
                phone={contact.phone}
                onClick={() => this.onClickContact(contact)}
            />
        ));
        return <ViewContainer>{ContactsComponent}</ViewContainer>;
    }
}
