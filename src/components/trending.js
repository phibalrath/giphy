import React from 'react'

import SearchChild from './searchChild';

class Trending extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            search: []
        }
    }

    async componentDidMount () {
        let reponse = await fetch("http://api.giphy.com/v1/gifs/trending?api_key=MfTKrGXzXd4MahWRELnLhigaT5ucaVF5&limit=5");
        // console.log(reponse);
        let result = await reponse.json();
        // console.log(result)
        this.setState({
            data: result.data
        })
        // console.log(result.data);
        // console.log(this.state.data)
        // console.log(this.state.data[0].url)
        // console.log(this.state.data[0].images.fixed_height.url)
    }
    

    render() {

        const renderList = () => {
            return this.state.data.map((data) => {
                return <SearchChild data= {data} />
            })
        }

        return (
            <div>
                <h5>Trending Giphy</h5>
                <div className="row">
                    {renderList()}
                </div>
            </div>
        )
    }
}

export default Trending;