

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


let initialState = {

  posts: [
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
      id: 2,
      msg: "ghbdtn",
      likesCount: 5
    },
    {
      id: 3,
      msg: "ghbdtn",
      likesCount: 4
    },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {

  let stateCopy

  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText
      stateCopy = {
        ...state,
        newPostText: '',
        posts: [...state.posts, {
          id: 5,
          msg: text,
          likesCount: 5,
        }]
      }

      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state, newPostText: action.newText }

      return stateCopy
    }
    default:

      return state;
  }

}

export const addPostActionCreator = () => {

  return ({
    type: ADD_POST

  })

}

export const updateNewPostTextActionCreator = (text) => {

  return ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  })


}

export default profileReducer