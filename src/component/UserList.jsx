import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../actions/userAction';
import '../css/UserList.css';
import UserSelectedData from './UserSelectedData';
import InputSearch from './InputSearch';
import { filteredDataSelector } from '../selectors/appSelector';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDataCollection : []
        }
    }
    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=5')
        //     .then((response) => {
        //         console.log('response', response);
        //         this.setState({
        //             userData : response.data
        //         })
        //     })

        /** Now calling from actions */
        this.props.getUserData();
    }
    selectUserData = (event) => {
            let checkList = this.state.selectedDataCollection;
            let check = event.target.checked;
            let checkedData = event.target.value;

            if(check){
                this.setState({
                    selectedDataCollection : [...this.state.selectedDataCollection, checkedData]
                })
            } else {
                let index = checkList.indexOf(checkedData);
                if(index > -1){
                    checkList.splice(index, 1);
                    this.setState({
                        selectedDataCollection : checkList
                    }) 
                }
            }
    }
    renderFilteredData = () => {
        return(
            <div>
                <b><i>Data</i></b>
                {this.props.filteredData.map((data)=>{
                    return(
                        <div>
                            <input type="checkbox"
                                onChange={this.selectUserData} 
                                value = {data.title}
                            />
                        {data.title} 
                       </div>
                    )
                })}
        </div>
        )
    }
    render(){
        // const renderUserData = this.props.userData.map((data) => {
        //     return (
        //         <div>
        //             <div className="individual-data" key={data.id}>
        //                 <input type="checkbox"
        //                     onChange={this.selectUserData} 
        //                     value = {data.title}
        //                 />
        //                 {data.title}
        //             </div>
        //         </div>
        //     )
        // })
        return(
            <div style={{margin: '0 auto', maxWidth: '700px'}}>
                <InputSearch />
                <UserSelectedData data1={this.state.selectedDataCollection} />
                {/* {renderUserData} */}
                {this.renderFilteredData()}
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        userData : state.userData.items,
        filteredData: filteredDataSelector(state)
    }
}
export default connect(mapStateToProps, {getUserData})(UserList);