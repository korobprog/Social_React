import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs';





let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps= (dispatch) => {
    return {
        updateNewMessageBody: () => {dispatch(sendMessageCreator());},
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));} 
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;