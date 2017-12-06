import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import {setTokens} from "../actions/action_tokens";
import {browserHistory} from "react-router";


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: []
        }
    }


    componentDidMount() {
        console.log('this', this);
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState] : event.target.value,
        });
    };


    search(){
        const QUERY = this.state.query;
        console.log('token: ', this.props.tokens);
        console.log('search query: ', QUERY);
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">
                    <h2>Music Master</h2>
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for an Artist'
                            value={this.state.query}
                            onChange={event => this.handleAnyInputChange(event, 'query')}
                            onKeyPress={event => {
                                if(event.key === 'Enter'){
                                    this.search()
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={()=> this.search()}>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div>
                    <a onClick={()=>browserHistory.push('/')}>Log Out</a>
                </div>
                <div>

                </div>
            </div>
        )
    }

}


function mapStateToProps(state){
    const { access_token, refresh_token } = state.reducer.tokens;
    console.log('state in search class', state);
    return {
        tokens: {
            access_token,
            refresh_token
        }
    }
}

export default connect(mapStateToProps, {setTokens})(Search);