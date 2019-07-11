import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {Signin} from '../actions'

class FacebookAuth extends Component {
    renderButton(){
        if(this.props.isSignedIn) {
            return (
                <div className='header_con'>
                    <img src={this.props.picture} className='header_pics'alt='active'/>
                    <p className='header_paragraph'>{this.props.name}</p>
                </div>
                
            );
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
        this.props.Signin(response.userID,response.name,response.picture.data.url)
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
    return {
        isSignedIn:state.facebookAuth.isSignedIn,
        picture : state.facebookAuth.picture,
        name : state.facebookAuth.name
            
    }
}
export default connect(mapStateToProps,{Signin})(FacebookAuth);
