import React, { Component } from 'react'
import Todoform from '../components/todoForm';
import {connect} from 'react-redux';
import {todocreate} from '../actions';

class todoCreate extends Component {
    onSubmit=(formValues)=> {
        this.props.todocreate(formValues)
        
    }
    render() {
        return (
            <div>
                <Todoform onSubmit={this.onSubmit} title='+Add'/>
            </div>
        )
    }
}
export default connect(null,{todocreate})(todoCreate);
