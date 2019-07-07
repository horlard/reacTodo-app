import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchtodo,editodo} from '../actions';
import Todoform from '../components/todoForm';

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
                <Todoform onSubmit={this.onSubmit} title='Edit' initialValues={_.pick(this.props.todo,'todo')}/>
            </div>
        )
    }
    
}
const mapStateToProps = (state,ownProps)=> {
    return {todo : state.actionReducer[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchtodo,editodo})(todoEdit);
