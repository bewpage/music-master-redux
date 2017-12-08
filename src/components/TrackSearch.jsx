import React, { Component } from 'react';
import './TrackSearch.css';


class TrackSearch extends Component{


    render(){
        return(
            <div className='track-search-container'>
                <form>
                    <input type="text"
                           placeholder='Search...'
                    />
                    <button>
                        <i className='fa fa-search search' aria-hidden="true"></i>
                    </button>
                </form>
            </div>
        )
    }
};


export default TrackSearch;