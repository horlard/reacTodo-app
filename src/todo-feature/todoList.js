import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchtodos} from '../actions';

class todoList extends React.Component {
    componentDidMount(){
        this.props.fetchtodos();
        console.log(this.props.todos)
    }
    renderList(){
        return this.props.todos.map(todo=>{
            return (
                <div className='item' key={todo.id}>
                    {this.renderActions(todo)}
                    <i class="hand point right outline icon"></i>
                    <div className='content'>
                        <div className='header'>
                            {todo.todo}
                        </div>
                    </div>
                    
                </div>
            )
        })
       
    }
    renderActions = (todo)=> {
        return (
            <div className='right floated content'>
                    <Link to={`/edit/${todo.id}`} className='ui button primary'>
                        Edit
                    </Link>
                    <Link to={`/delete/${todo.id}`} className='ui negative button'>
                        Delete
                    </Link>
                </div>
        )
    }
    renderCreate=()=> {
        if(this.props.isSignedIn) {
            return (
                <div style={{textAlign : 'right',marginTop:'20px'}}>
                    
                        <Link to='/new' className='ui button primary'>
                            Create Todo
                        </Link>
                    </div>
            )
        }
            
        
    }
    render(){
        return (
            <div>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.renderCreate()}
                   
            </div>
        )
    }
    
}

const mapStateToProps = (state)=> {
    return {
        todos:Object.values(state.actionReducer),
        isSignedIn : state.facebookAuth.isSignedIn
    }
}
export default connect(mapStateToProps,{fetchtodos})(todoList)