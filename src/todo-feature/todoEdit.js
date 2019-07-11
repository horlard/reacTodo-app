import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchtodo,editodo} from '../actions';
import Todoform from '../components/todoForm';
import Loader from "../components/loader";

class todoEdit extends React.Component {
    componentDidMount() {
        this.props.fetchtodo(this.props.match.params.id)
        console.log(this.props)
    }
    onSubmit=(formValues)=> {
        this.props.editodo(formValues,this.props.match.params.id)
    }
    render() {
        return (
            <div>
                {
                    this.props.isSignedin ? 
                    <Todoform onSubmit={this.onSubmit} title='Edit' initialValues={_.pick(this.props.todo,'todo')}/> 
                    :
                    <Loader/> 
                }
                
            </div>
        )
    }
    
}
const mapStateToProps = (state,ownProps)=> {
    return {
        todo : state.actionReducer[ownProps.match.params.id],
        isSignedin: state.facebookAuth.isSignedIn
    }
}
export default connect(mapStateToProps,{fetchtodo,editodo})(todoEdit);
