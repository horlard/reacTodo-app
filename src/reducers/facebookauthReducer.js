const initial = {
    isSignedIn : null,
    clientId : null
}

export default (state=initial,action) => {
    switch(action.type) {
        case 'SIGN_IN' :
            return {...state,isSignedIn:true,clientId: action.payload}
        case 'SIGN_OUT' :
            return {...state,isSignedIn:false}
        default : 
            return state;
    }
}