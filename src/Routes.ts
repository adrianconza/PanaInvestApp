/* Containers */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactsContainer from './containers/ContactsContainer';
import DetailContactContainer from './containers/DetailContactContainer';

/* Icons */

const AppNavigator = createStackNavigator(
    {
        Contacts: ContactsContainer,
        DetailContact: DetailContactContainer
    },
    {
        initialRouteName: 'Contacts'
    }
);

library.add(faPhoneAlt, faEnvelope, faMobileAlt);

export default createAppContainer(AppNavigator);
