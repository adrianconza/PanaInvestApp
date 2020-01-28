import { connect } from 'react-redux';
import { DetailContactView } from '../components/DetailContactView';
import { IApp } from '../reducers/appInterface';
import { IContact } from '../reducers/contactsReducer';

interface IMapStateToProps {
    contact: IContact;
}

export type IDetailContactContainerProps = IMapStateToProps & {};

const mapStateToProps = (state: IApp): IMapStateToProps => {
    return {
        contact: state.contactsReducer.contact
    };
};

const mapDispatchToProps = (): {} => {
    return {};
};

function mergeProps(stateProps: IMapStateToProps, dispatchProps: {}): IDetailContactContainerProps {
    return {
        ...stateProps,
        ...dispatchProps
    };
}

export default connect<IMapStateToProps, {}, any>(mapStateToProps, mapDispatchToProps, mergeProps)(DetailContactView);
