



let initialState = {
    friends: [
        {
            id: 1,
            name: "ivan"
        },
        {
            id: 2,
            name: "divan"
        },
        {
            id: 3,
            name: "sivan"
        },

    ],
    nav :[
        {
            to:'/profile',
            name:'Profile'
        },
        {
            to:'/dialogs',
            name:'Messages'
        },
        {
            to:'/music',
            name:'Music'
        },
        {
            to:'/news',
            name:'News'
        },
        {
            to:'/settings',
            name:'Settings'
        },
        {
            to:'/users',
            name:'Users'
        },

    ]
}


export const sidebarReducer = (state = initialState, action) => {

    return state

}

export default sidebarReducer