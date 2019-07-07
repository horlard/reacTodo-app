import React from 'react'
import {connect} from 'react-redux';


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
                <Modal
                    title = 'Delete Todo'
                    content = 'Are you sure you are done with this todo'
                    action ={this.renderAction()}

                
                
                />
            </div>
        )
    }
    
}
const mapStateToProps = (state,ownProps) => {
    return {todo : state.actionReducer[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchtodo,deletetodo})(todoDelete);
