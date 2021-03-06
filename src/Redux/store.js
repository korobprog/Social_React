import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you?', likesCount: 12 },
                { id: 2, message: 'Hi?', likesCount: 11 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych', avatar: 'https://sun1-19.userapi.com/c858220/v858220623/fa1e/cS8ThNzKCCs.jpg' },
                { id: 2, name: 'Andrew', avatar: 'https://www.iphones.ru/wp-content/uploads/2020/01/mercedes-benz-avatar-vision-avtr-concept-car-official-32.jpg' },
                { id: 3, name: 'Sveta', avatar: 'https://i.pinimg.com/736x/2a/3a/13/2a3a133c492b411722c5d58f43b9d1ca.jpg' },
                { id: 4, name: 'Sasha', avatar: 'https://sun1-19.userapi.com/c858220/v858220623/fa1e/cS8ThNzKCCs.jpg' },
                { id: 5, name: 'Victor', avatar: 'https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo' },
                { id: 6, name: 'Valera', avatar: 'https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your social React1111' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('state chenge');
    },
    getState() {
        return this._state;
    },
    addMessage() {
        const messagesMessage = {
            id: 7,
            message: this._store.dialogsPage.newMessagesText
        }
        this._store.dialogsPage.messages.push(messagesMessage);
        this._store.dialogsPage.newMessagesText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessagesText(newText) {
        this._store.dialogsPage.newMessagesText = newText;
        this._callSubscriber(this._state); //observer
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}





window.store = store;
export default store;