import React, { Component } from 'react';

class Error extends Component {
    render() {
        console.log('error message: ', this.props.errorMsg);
        return (
            <div>
                <div className="">
                    <h1>Error</h1>
                </div>
            </div>
        );
    }
}

export default Error;
