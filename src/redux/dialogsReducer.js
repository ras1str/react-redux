const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "dimych"
        },
        {
            id: 2,
            name: "peter"
        },
        {
            id: 3,

            name: "dimych"
        },
        {
            id: 4,

            name: "peter"
        },
        {
            id: 5,
            name: "dimych"
        },
        {
            id: 6,
            name: "peter"
        },
    ],

    messages:
        [
            {
                id: 1,
                msg: "ghbdnt",
                likesCount: 11
            },
            {
                id: 2,
                msg: "ghbdtn",
                likesCount: 5
            },
            {
                id: 3,
                msg: "ghbdtn",
                likesCount: 4
            },
            {
                id: 3,
                msg: "ghbdtn",
                likesCount: 4
            },
            {
                id: 3,
                msg: "ghbdtn",
                likesCount: 4
            },
            {
                id: 3,
                msg: "ghbdtn",
                likesCount: 4
            },],


    newMessageText: '123',
}

const dialogsReducer = (state = initialState, action) => {

            let stateCopy

            switch (action.type) {
                case ADD_MESSAGE:
                    let text = state.newMessageText
                    stateCopy = {
                        ...state,
                        newMessageText: "",
                        messages: [...state.messages,
                        {
                            id: 1,
                            msg: text,
                            likesCount: 11
                        }]
                    }
                    return stateCopy

                case UPDATE_NEW_MESSAGE:
                    stateCopy = { ...state, newMessageText: action.newMsg }
                    
                    return stateCopy

                default:

                    return state;
            }



        }

export const addMessageActionCreator = () => {

    return ({
        type: "ADD-MESSAGE"

    })

}

export const updateNewMessageTextActionCreator = (text) => {

    return ({
        type: UPDATE_NEW_MESSAGE,
        newMsg: text,
    })


}

export default dialogsReducer