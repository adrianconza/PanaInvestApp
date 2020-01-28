import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';
import styled from 'styled-components/native';
import { IDetailContactContainerProps } from '../containers/DetailContactContainer';
import { DetailComponent } from './DetailComponent';

const ViewContainer = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #ffffff;
`;

const ImageContainer = styled.View`
    flex: 0.5;
    padding: 50px;
    background-color: #4890d2;
`;

const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 75px;
    border-color: #fff;
    border-width: 2px;
    margin: 0 auto;
`;

const Name = styled.Text`
    font-size: 22px;
    margin: 40px 0 10px 0;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;

const PhoneContainer = styled.View`
    flex-direction: row;
    justify-content: center;
`;

const Phone = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    margin-left: 5px;
`;

const DataContainer = styled.View`
    flex: 1;
`;

export class DetailContactView extends React.Component<IDetailContactContainerProps, any> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', 'Detail Contact'),
            headerStyle: {
                backgroundColor: '#4890D2'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        };
    };

    public render() {
        const { contact } = this.props;
        return (
            <ViewContainer>
                <ImageContainer>
                    <Image source={{ uri: contact.photo }} />
                    <Name>{`${contact.name} ${contact.surname}`}</Name>
                    <PhoneContainer>
                        <FontAwesomeIcon icon={['fas', 'phone-alt']} color="#ffffff" />
                        <Phone>{contact.phone}</Phone>
                    </PhoneContainer>
                </ImageContainer>
                <DataContainer>
                    <DetailComponent icon={['fas', 'envelope']} label="Email" value={contact.email} />
                    <DetailComponent icon={['fas', 'mobile-alt']} label="Personal" value={contact.phone} />
                </DataContainer>
            </ViewContainer>
        );
    }
}
