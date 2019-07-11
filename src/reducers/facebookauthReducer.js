const initial = {
    isSignedIn : null,
    clientId : null,
    name : null
}

export default (state=initial,action) => {
    switch(action.type) {
        case 'SIGN_IN' :
            return {...state,isSignedIn:true,clientId: action.payload.clientId,name: action.payload.name,picture:action.payload.picture}
        case 'SIGN_OUT' :
            return {...state,isSignedIn:false}
        default : 
            return state;
    }
}