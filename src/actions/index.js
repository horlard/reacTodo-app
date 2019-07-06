export const Signin=(clientId)=> {
    return {
        type : 'SIGN_IN',
        payload : clientId
    }
}
export const Signout =()=> {
    return{
        type: 'SIGN_OUT'
    }
}