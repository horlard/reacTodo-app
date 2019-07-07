import _ from 'lodash';

export default (state={},action)=> {
    switch(action.type) {
        case 'TODO_CREATE' : 
            return {...state,[action.payload.id] : [action.payload]}
        case 'FETCH_TODO' : 
            return {...state,[action.payload.id] : [action.payload]}
        case 'EDIT_TODO' :
            return {...state,[action.payload.id] : [action.payload]}
        case 'DELETE_TODO' : 
            return _.omit(state,action.payload)
        case 'FETCH_TODOS' : 
            return {...state,..._.mapKeys(action.payload,'id')}
        default :
            return state;
    }
}