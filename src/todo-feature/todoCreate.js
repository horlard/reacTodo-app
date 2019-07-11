import React, { Component } from 'react'
import Todoform from '../components/todoForm';
import {connect} from 'react-redux';
import {todocreate} from '../actions';
import Loader from '../components/loader';

class todoCreate extends Component {
    onSubmit=(formValues)=> {
        this.props.todocreate(formValues)
        
    }
    render() {
        return (
            <div>
                {
                    this.props.isSignedin ? <Todoform onSubmit={this.onSubmit} title='+Add'/> : <Loader/>
                }
                
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {isSignedin:state.facebookAuth.isSignedIn}
}
export default connect(mapStateToProps,{todocreate})(todoCreate);
