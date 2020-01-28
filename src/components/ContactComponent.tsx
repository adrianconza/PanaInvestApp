import * as React from 'react';
import styled from 'styled-components/native';

interface IContactComponent {
    photo: string;
    name: string;
    surname: string;
    phone: string;
    onClick: () => void;
}

const ContactContainer = styled.View`
    flex: 1;
    border-bottom-width: 1px;
    border-bottom-color: #dddddd;
`;

const Bottom = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    padding: 16px;
`;

const ImageContainer = styled.View`
    flex: 0.25;
`;

const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin: 0 auto;
`;

const DataContainer = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 16px;
`;

const Name = styled.Text`
    font-size: 16px;
    margin-bottom: 4px;
    font-weight: bold;
`;

const Phone = styled.Text`
    color: #4890d2;
`;

export const ContactComponent = ({ photo, name, surname, phone, onClick }: IContactComponent) => (
    <ContactContainer>
        <Bottom onPress={onClick}>
            <ImageContainer>
                <Image source={{ uri: photo }} />
            </ImageContainer>
            <DataContainer>
                <Name>{`${name} ${surname}`}</Name>
                <Phone>{phone}</Phone>
            </DataContainer>
        </Bottom>
    </ContactContainer>
);
