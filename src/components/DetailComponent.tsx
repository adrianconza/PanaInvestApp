import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';
import styled from 'styled-components/native';

interface IContactComponent {
    icon: string[];
    label: string;
    value: string;
}

const DetailContainer = styled.View`
    flex-direction: row;
    padding: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #dddddd;
`;

const IconContainer = styled.View`
    flex: 0.25;
    justify-content: center;
    align-items: center;
`;

const DataContainer = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 16px;
`;

const Label = styled.Text`
    font-size: 20px;
    margin-bottom: 4px;
    font-weight: bold;
`;

const Value = styled.Text`
    font-size: 16px;
    color: #4890d2;
`;

export const DetailComponent = ({ icon, label, value }: IContactComponent) => (
    <DetailContainer>
        <IconContainer>
            <FontAwesomeIcon icon={icon} size={24} color="#000000" />
        </IconContainer>
        <DataContainer>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </DataContainer>
    </DetailContainer>
);
