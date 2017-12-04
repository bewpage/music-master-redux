import React, { Component } from 'react'



class Home extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <div className="spotify-login">
                    <h1>Spotify + React + React-Router Login Flow</h1>
                    <div className="page-content">
                        <p>This is an example of the Authorization Code flow using routes.</p>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
