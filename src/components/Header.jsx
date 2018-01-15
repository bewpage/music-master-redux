import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Header.css';
import TrackSearch from "./TrackSearch";


class Header extends Component {

    componentDidMount(){
        const { id } = this.props.reducer.userReducer.user;
        // console.log('id in headers', id)
    }

    render() {
        const { id } = this.props.reducer.userReducer.user;
    // console.log('Header props', this.props);
        return (
            <header className='user-header row borderBox'>
                    <div className='user-info'>
                        <div className='col-md-12'>
                            <figure className='user-avatar avatar'><i className="avatar-icon far fa-user fa-7x"></i></figure>
                            <h2 className='user-name'>{id}</h2>
                        </div>
                    </div>

            </header>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return dispatch
};


function mapStateToProps(state){
    return {state}
}

export default connect(mapDispatchToProps, mapStateToProps)(Header);
