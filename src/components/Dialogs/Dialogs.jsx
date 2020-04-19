import React from 'react';
import s from './Dialogs.module.css' ;
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messange/Messange";

const Dialogs = (props) => {
/*
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your social React'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]
*/

    /*Map*/
let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = props.messages.map(m => <Message message={m.message} />);
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>

            {dialogsElements}

        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
     )
}

export default Dialogs;