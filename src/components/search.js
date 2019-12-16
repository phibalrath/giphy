import React from 'react'
import $ from 'jquery';
import SearchChild from './searchChild'
import axios from 'axios'

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }

        this.onClick = this.onClick.bind(this);
    }

    async onClick (event) {
        //Search field must have a value
        event.preventDefault();

        //make API call to Giphy. Return a JSON Object
        axios.get("https://api.giphy.com/v1/gifs/search?q=" + $('#userQuery').val() +  "&api_key=MfTKrGXzXd4MahWRELnLhigaT5ucaVF5&limit=5").then((response) => {
            this.setState({
                data: response.data.data
            })  
        })
    }
    

    render() {

        //Map data to render and pass on to Child Component
        const renderClick = () => {
            return this.state.data.map((data)=> {
                return <SearchChild data = {data} />
            })
        }


        return (
            <div>
                <h5>Search Giphy </h5>
                <input id="userQuery" placeholder="Search..." />
                <button id="searchButton" onClick={this.onClick} >Search</button>
                
                <div className="row">
                    <div className = "col-md-12" >
                        {renderClick()}
                    </div>
                </div>
            </div>

        )
    }

}

export default Search;