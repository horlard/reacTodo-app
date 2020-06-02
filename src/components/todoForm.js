import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form';
 
class todoForm extends Component {

    state={
        isLoading: false
    }

    onFormSubmit=(formValues)=> {
        this.props.onSubmit(formValues);
        this.setState({isLoading:true})
    }
    renderError=(meta)=> {
        if(meta.error && meta.touched) {
            return (
                
                    <div className='ui error message'>
                        <div className='header'>{meta.error}</div>
                    </div>
            )
        }
    }
    renderInput = (Input) => {
        return (
            <div>
                <label>{Input.label}</label>
                <input type='text' onChange={Input.input.onChange} value={Input.input.value}/>
                <div>{this.renderError(Input.meta)}</div>
            </div>
        )
    }

    render() {
        const {isLoading}=this.state
        return (
            <div>
                <form className='ui form error' onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <Field name='todo' component={this.renderInput} label='Enter your Todo'/>
                    <button className={`ui primary ${isLoading ? 'loading' : ''} button`} style={{marginTop:'20px'}} disabled={isLoading}>{this.props.title}</button>
                </form>
                
            </div>
        )
    }
}

const Validation = (formValues) => {
    const errors = {};
    if(!formValues.todo) {
        errors.todo = 'Please enter a todo'
    }
    return errors;
}
export default reduxForm({
    form: 'todoCreate',
    validate:Validation
})(todoForm);
