import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"



let store = {
  _state: {
    profilePage:
  {
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
    newPostText:'mama',
  },



  dialogsPage: {
    dialogs:
      [
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
      newMessageText:'',
  },

  sideBar :{
    friends: [{
      id:1,
      name:"ivan"
    },
    {
      id:2,
      name:"divan"
    },
    {
      id:3,
      name:"sivan"
    },
    
  
  ]
}},
  _callSubcriber(){
    console.log('state changed') 
  },
  subscribe(observer){
    this._callSubcriber = observer
  },
  getState(){
    
    return this._state
  },
  dispatch(action){

   this._state.profilePage = profileReducer(this._state.profilePage, action)

   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

   this._callSubcriber(this._state)

  }
  
}
window.store = store





export default store;