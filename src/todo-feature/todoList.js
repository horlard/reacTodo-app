import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchtodos} from '../actions';
import Loader from '../components/loader';
import '../../src/style.css'

class todoList extends React.Component {
    componentDidMount(){
        this.props.fetchtodos();
    }
    renderList(){
        if(this.props.isSignedIn) {
            return this.props.todos.map(todo=>{
                return (
                    <div className='item' key={todo.id}>
                        {this.renderActions(todo)}
                        <i className="arrow right icon"></i>
                        <div className='content'>
                            <div className='header' key={todo.id}>
                                {todo.todo}
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }

        return <Loader />
        
       
    }
    renderActions = (todo)=> {
        if(todo.clientId=== this.props.clientID) {
            return (
                <div className='right floated content'>
                        <Link to={`/edit/${todo.id}`} className='ui button primary'>
                            Edit
                        </Link>
                        <Link to={`/delete/${todo.id}`} className='ui negative button' style={{backgroundColor:'yellowgreen'}}>
                            Done
                        </Link>
                    </div>
            )
        }
        return (
            <div className='right floated content'  id='floated-content'>
                <img src={this.props.picture}  className='profile_pics'/>
               {this.props.name}         
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
        return ''
            
        
    }
    render(){
        return (
            <div>
                <h2 className='ui header'>Todos</h2>
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
        isSignedIn : state.facebookAuth.isSignedIn,
        clientID:state.facebookAuth.clientId,
        name : state.facebookAuth.name,
        picture : state.facebookAuth.picture
    }
}
export default connect(mapStateToProps,{fetchtodos})(todoList)