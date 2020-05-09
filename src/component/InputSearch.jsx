import React, {Component} from 'react';
import { connect } from 'react-redux';
import {findInputItem} from '../actions/userAction';

class InputSearch extends Component{
    searchItem = (e) => {
        const searchItem = e.target.value;
        this.props.findInputItem(searchItem);
    }
    render(){
        return(
            <div>
                <label htmlFor='itemName'>Search item here...</label>
                <input type ="text" id="itemName" onKeyUp={this.searchItem} />
            </div>
        )
    }
}

export default connect(null, {findInputItem})(InputSearch);