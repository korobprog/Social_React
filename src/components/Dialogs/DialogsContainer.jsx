import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../Redux/dialogs-reducer"
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';





let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);