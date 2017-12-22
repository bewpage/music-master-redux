import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTokens, refreshToken } from "../actions/action_tokens";
import { fetchUser } from "../actions/action_user";
import './Login.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: false,
        }
    }

    componentDidMount(){
        // const {params, user} = this.props;
        // const {access_token, refresh_token} = params;
        // const { id } = user;
        // this.props.setTokens({access_token, refresh_token});
        // this.props.fetchUser(access_token);
        // console.log('this', this);

    }


    loginTest(){
        // window.location = 'http://localhost:3000/login';
        // this.props.browserHistory.push('./search');
        console.log('this in login test', this);

    }


    render() {
        return (
            <div className="login container borderBox">
                <div className='row login-logo'>
                    <div className='link'>
                        <i className="logo-image fab fa-spotify fa-10x"></i>
                    </div>
                </div>
                <div className='login-row'>
                    <div className='login-item'>
                        <h2 className='login-title'
                        >
                            Here's our login page!
                        </h2>
                    </div>
                </div>
                {/*<button onClick={() => this.loginTest()}*/}
                {/*>*/}
                    {/*LogIn*/}
                {/*</button>*/}
                <div className='login-row'>
                    <div className='login-item'>
                        <button className='btn btn-primary'>
                            <a href={'http://localhost:3000/login'}>spotify login</a>
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { access_token, refresh_token } = state.reducer.tokens;
    const { id } = state.reducer.userReducer.user;
    console.log('state in Login', state);
    return {
        tokens: {
            access_token,
            refresh_token,
        },
        user: {
            id
        }
    }
}



// export default connect(mapStateToProps, null)(User);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setTokens,
        refreshToken,
        fetchUser
    }, dispatch)
};




export default connect(mapStateToProps, mapDispatchToProps)(Login);
