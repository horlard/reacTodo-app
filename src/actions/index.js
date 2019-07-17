import Todoapi from '../api/todosapi';
import History from '../components/history';

export const Signin=(clientId,name,picture)=> {

    return {
        type : 'SIGN_IN',
        payload : {
            clientId,
            name,
            picture
        }
    }
}
export const Signout =()=> {
    return{
        type: 'SIGN_OUT'
    }
}
export const todocreate = formValues => async (dispatch,getState) => {
    const {clientId,name} = getState().facebookAuth
    const response = await Todoapi.post('/todos',{...formValues,clientId,name});

    dispatch({
        type:'TODO_CREATE',
        payload : response.data
    })
    History.push('/');
}

export const fetchtodo = (id) => async dispatch=> {
    const response = await Todoapi.get(`/todos/${id}`);

    dispatch ({
        type: 'FETCH_TODO',
        payload : response.data
    })
}

export const fetchtodos =()=> async dispatch => {
    
    const response =  await Todoapi.get(`/todos`);
    dispatch({
        type: 'FETCH_TODOS',
        payload : response.data
    })
}

export const editodo = (formValues,id) => async dispatch => {
    const response=await Todoapi.patch(`/todos/${id}`,formValues)
    dispatch({
        type : 'EDIT_TODO',
        payload : response.data
    })
    History.push('/');
}

export const deletetodo = id => async dispatch => {
     await Todoapi.delete(`/todos/${id}`)
    dispatch({
        type : 'DELETE_TODO',
        payload: id
    })
    History.push('/');
}