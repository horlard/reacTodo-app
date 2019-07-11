import React from 'react'
import {connect} from 'react-redux';
import Loader from '../components/loader';


import Modal from '../components/modal';
import {fetchtodo,deletetodo} from '../actions';
import {Link} from 'react-router-dom';

class todoDelete extends React.Component {

    componentDidMount(){
        this.props.fetchtodo(this.props.match.params.id);
        console.log(this.props.todo)
    }
    onDelete(){
        this.props.deletetodo(this.props.match.params.id)
    }
    renderAction() {
        return (
            <React.Fragment>
                <button onClick={this.onDelete.bind(this)} className='ui button negative'>
                    Delete
                </button>
                <Link to='/' className='ui button'>
                    Cancel
                </Link>
            </React.Fragment>
        )
    }
    
    
    render(){
        return (
            <div>
                {
                    this.props.isSignedin ? 
                    <Modal
                    title = 'Delete Todo'
                    content = 'Are you sure you are done with this todo'
                    action ={this.renderAction()}
                    /> :
                    <Loader/>
                }
                
            </div>
        )
    }
    
}
const mapStateToProps = (state,ownProps) => {
    return {
            todo : state.actionReducer[ownProps.match.params.id],
            isSignedin: state.facebookAuth.isSignedIn
        }
}

export default connect(mapStateToProps,{fetchtodo,deletetodo})(todoDelete);
