const reducer1 = (state = [], action) => {

    console.log(state, action, 'reducer1');

    switch(action.type){
        case 'GET_DATA':
            state = action.payload
            return state 

        default:
            return state 
    }
}

export { reducer1 }