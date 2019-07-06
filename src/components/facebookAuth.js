import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {Signin} from '../actions'

class FacebookAuth extends Component {
    renderButton(){
        if(this.props.isSignedIn) {
            return '';
        }else {
           return  <FacebookLogin
            appId="325255145050351"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked.bind(this)}
            callback={this.responseFacebook} 
            />
        }
    }
    componentClicked(){
        console.log(this.props);
        
    }
    responseFacebook=(response)=>{
        this.props.Signin(response.userID)
        console.log(response)
        
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.renderButton()
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.facebookAuth.isSignedIn}
}
export default connect(mapStateToProps,{Signin})(FacebookAuth);
